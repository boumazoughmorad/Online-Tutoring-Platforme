package boumazough.example.online_tutoring_platform_backend.controller.api.v1.auth;

import boumazough.example.online_tutoring_platform_backend.model.dto.request.users.AuthRequest;
import boumazough.example.online_tutoring_platform_backend.model.dto.request.users.AuthResponse;
import boumazough.example.online_tutoring_platform_backend.model.dto.request.users.UserRegistrationRequest;
import boumazough.example.online_tutoring_platform_backend.service.auth.IAuthService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.mail.MessagingException;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Locale;

@RestController
@RequestMapping("/api/v1/auth/")
@Tag(name = "Authentication API")
@RequiredArgsConstructor
@Slf4j
public class AuthController {

    private final IAuthService authService;

    @PostMapping("register")
    @Operation(summary = "Register by user credentials (email and password)")
    public ResponseEntity<String> registerUser(
            @Valid @RequestBody UserRegistrationRequest registrationRequest,
            @RequestHeader(value = "Accept-Language", required = false) Locale locale)
                throws MessagingException {

        if (locale == null) {

            locale = Locale.getDefault();
        }
        return new ResponseEntity<>(authService.registerUser(registrationRequest,locale), HttpStatus.OK);
    }

    @GetMapping("verify")
    @Operation(summary = "verify by user")
    public ResponseEntity<String> verifyAccount(@RequestParam String token) {
        return new ResponseEntity<>(authService.verifyAccount(token), HttpStatus.OK);
    }

    @PostMapping("resend-verification")
    @Operation(summary = "resend verification ")
    public ResponseEntity<String> resendVerificationToken(@RequestParam String email) throws MessagingException {
        return new ResponseEntity<>(authService.resendVerificationToken(email), HttpStatus.OK);
    }
    @PostMapping("login")
    @Operation(summary = "Login by user credentials (email and password)")
    public ResponseEntity<AuthResponse> login(@Valid @RequestBody AuthRequest login) {
        return new ResponseEntity<>(authService.login(login), HttpStatus.OK);
    }
//

//
//    @PostMapping("otp-login")
//    @Operation(summary = "Login by otp. (The two factor auth code is send to the user email)")
//    public ResponseEntity<SuccessResponse<AuthResponse>> loginWithOtp(@Valid @RequestBody OtpRequest login) throws BadRequestException {
//        return new ResponseEntity<>(authService.loginWithOtp(login), HttpStatus.OK);
//    }
//
//    @PostMapping("refresh-token")
//    @Operation(summary = "Refresh the access token")
//    public ResponseEntity<SuccessResponse<AuthResponse>> refreshToken(@Valid @RequestBody RefreshTokenRequest request) {
//        return new ResponseEntity<>(authService.refreshToken(request), HttpStatus.OK);
//    }
//
//    @PostMapping("confirm-invitation")
//    @Operation(summary = "Confirm the invitation")
//    public ResponseEntity<SuccessResponse<AuthResponse>> confirmInvitation(@Valid @RequestBody ConfirmInvitationRequest request)
//            throws BadRequestException {
//        return new ResponseEntity<>(authService.confirmInvitation(request), HttpStatus.OK);
//    }
}
