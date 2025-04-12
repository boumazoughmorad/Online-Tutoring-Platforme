package boumazough.example.online_tutoring_platform_backend.model.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.UpdateTimestamp;

import java.io.Serializable;
import java.time.LocalDateTime;

@Entity
@Table(name = "verification_tokens")
@Getter
@Setter
@NoArgsConstructor
public class VerificationToken implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String token;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    private Users user;

    @Column(name = "expiry_date", nullable = false)
    private LocalDateTime expiryDate;


    public VerificationToken(String token, Users user) {
        this.token = token;
        this.user = user;
        this.expiryDate = calculateExpiryDate(24 * 60); // 24 hours
    }

    private LocalDateTime calculateExpiryDate(int expiryTimeInMinutes) {
        return LocalDateTime.now().plusMinutes(expiryTimeInMinutes);
    }

    public void updateToken(String newToken) {
        if (newToken == null || newToken.trim().isEmpty()) {
            throw new IllegalArgumentException("Token cannot be null or empty");
        }
        this.token = newToken;
        this.expiryDate = calculateExpiryDate(24 * 60);
    }
}