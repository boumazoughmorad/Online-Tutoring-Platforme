package boumazough.example.online_tutoring_platform_backend.service.auth;

import boumazough.example.online_tutoring_platform_backend.model.dto.request.users.AuthRequest;
import boumazough.example.online_tutoring_platform_backend.model.dto.request.users.AuthResponse;
import boumazough.example.online_tutoring_platform_backend.model.dto.request.users.UserRegistrationRequest;
import jakarta.mail.MessagingException;
import jakarta.validation.Valid;

import java.util.Locale;


public interface IAuthService {
    String registerUser(UserRegistrationRequest registrationRequest, Locale locale) throws MessagingException;

    String verifyAccount(String token);

    String resendVerificationToken(String email) throws MessagingException;

    AuthResponse login( AuthRequest login);
}
