package boumazough.example.online_tutoring_platform_backend.model.dto.request.users;

public record UserRegistrationRequest(String firstname ,String lastname,String email, String password, String role) {
}
