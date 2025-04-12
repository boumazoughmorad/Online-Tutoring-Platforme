package boumazough.example.online_tutoring_platform_backend.model.dto.request.users;

public record AuthRequest(
        String email,
        String password) {
}
