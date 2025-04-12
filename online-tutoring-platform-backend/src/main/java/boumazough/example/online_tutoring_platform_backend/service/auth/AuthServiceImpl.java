package boumazough.example.online_tutoring_platform_backend.service.auth;

import boumazough.example.online_tutoring_platform_backend.mappers.UsersMapper;
import boumazough.example.online_tutoring_platform_backend.model.Enums.Role;
import boumazough.example.online_tutoring_platform_backend.model.dto.request.users.AuthRequest;
import boumazough.example.online_tutoring_platform_backend.model.dto.request.users.AuthResponse;
import boumazough.example.online_tutoring_platform_backend.model.dto.request.users.UserRegistrationRequest;
import boumazough.example.online_tutoring_platform_backend.model.entity.Users;
import boumazough.example.online_tutoring_platform_backend.model.entity.VerificationToken;
import boumazough.example.online_tutoring_platform_backend.repository.UserRepository;
import boumazough.example.online_tutoring_platform_backend.repository.VerificationTokenRepository;
import boumazough.example.online_tutoring_platform_backend.security.config.JwtFilter;
import boumazough.example.online_tutoring_platform_backend.security.model.UserPrincipal;
import boumazough.example.online_tutoring_platform_backend.security.services.JWTService;
import boumazough.example.online_tutoring_platform_backend.service.Email.EmailService;
import boumazough.example.online_tutoring_platform_backend.util.ValidationConstants;
import jakarta.mail.MessagingException;
import lombok.RequiredArgsConstructor;
import org.apache.coyote.BadRequestException;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Locale;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements IAuthService {
    private final UserRepository userRepository;
    private final VerificationTokenRepository tokenRepository;
    private final PasswordEncoder passwordEncoder;
    private final JavaMailSender mailSender;
    private final UsersMapper userMapper;
    private final EmailService emailService;
    private final AuthenticationManager authenticationManager;
    private final JWTService jwtService;


    @Override
    public String registerUser(UserRegistrationRequest registrationRequest, Locale locale) throws MessagingException {
        Users user = null;
        try {
            user = registernewUserser(registrationRequest);
        } catch (BadRequestException e) {
            throw new RuntimeException(e);
        }

        String token = UUID.randomUUID().toString();
        saveVerificationTokenForUser(user, token);

        emailService.sendVerificationEmail(user, token, locale);

        return "User registered successfully. Verification email sent.";
    }

    @Override
    public String verifyAccount(String token) {

            String result = validateVerificationToken(token);

            if (result.equalsIgnoreCase("valid")) {
                return "Account verified successfully";
            } else if (result.equalsIgnoreCase("expired")) {
                throw new RuntimeException(ValidationConstants.TOKEN_EXPIRED);

            } else {
                throw new RuntimeException(ValidationConstants.INVALID_VERIFICATION_TOKEN);
            }

    }

    @Override
    public String resendVerificationToken(String email) throws MessagingException {
        Users user = null;
        try {
            user = userRepository.findByEmail(email)
                    .orElseThrow(() -> new BadRequestException(ValidationConstants.USER_NOT_FOUND + email));
        } catch (BadRequestException e) {
            throw new RuntimeException(e);
        }

        VerificationToken verificationToken = tokenRepository.findByUser(user);

        if (verificationToken != null) {
            verificationToken = generateNewVerificationToken(verificationToken.getToken());
        } else {
            String token = UUID.randomUUID().toString();
            saveVerificationTokenForUser(user, token);
        }

        emailService.sendVerificationEmail(user, verificationToken.getToken(), Locale.getDefault());

        return "Verification email resent";
    }

    @Override
    public AuthResponse login(AuthRequest login) {
        // 1. Authenticate the user.
        var authentication = this.manageAuthentication(login);
        var user = ((UserPrincipal) authentication.getPrincipal()).getUser();

        // 3. Generate the access & the refresh tokens.
        return this.generateTokens(user);
    }
    private Authentication manageAuthentication(AuthRequest loginRequest) {
        return authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        loginRequest.email(),
                        loginRequest.password()
                )
        );
    }
    public AuthResponse generateTokens(Users user) {
        // 1. Generate the access token.
        var jwt = jwtService.generateToken(user.getEmail());
        // 2. Generate the refresh token.
        // not yet develop
        //var refreshToken = refreshTokenService.get(user);
        // 3. Return the response.
        return new AuthResponse(jwt, "");
    }
    public Users registernewUserser(UserRegistrationRequest registrationRequest) throws BadRequestException {
        if (userRepository.existsByEmail(registrationRequest.email())) {
             throw new BadRequestException(ValidationConstants.EMAIL_ALL_READY_EXISTS);
        }

        Users user = userMapper.toUser(registrationRequest);
        user.setPassword(passwordEncoder.encode(registrationRequest.password()));
        user.setRole(Role.valueOf(registrationRequest.role().toUpperCase()));
        user.setEnabled(false);

        Users savedUser = userRepository.save(user);

        return savedUser;
    }

    public void saveVerificationTokenForUser(Users user, String token) {
        VerificationToken verificationToken = new VerificationToken(token, user);
        tokenRepository.save(verificationToken);
    }


    public String validateVerificationToken(String token) {
        VerificationToken verificationToken = tokenRepository.findByToken(token);

        if (verificationToken == null) {
            return "invalid";
        }

        Users user = verificationToken.getUser();
        LocalDateTime expiryDate = verificationToken.getExpiryDate();

        if (expiryDate.isBefore(LocalDateTime.now())) {
            tokenRepository.delete(verificationToken);
            return "expired";
        }

        user.setEnabled(true);
        userRepository.save(user);
        return "valid";
    }


    public VerificationToken generateNewVerificationToken(String oldToken) {
        VerificationToken verificationToken = tokenRepository.findByToken(oldToken);
        verificationToken.updateToken(UUID.randomUUID().toString());
        verificationToken.setExpiryDate(LocalDateTime.now().plusHours(24));
        return tokenRepository.save(verificationToken);
    }
}
