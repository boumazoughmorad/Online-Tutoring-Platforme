package boumazough.example.online_tutoring_platform_backend.model.entity;

import boumazough.example.online_tutoring_platform_backend.model.Enums.Role;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.io.Serializable;
import java.time.LocalDateTime;

@Entity
@Table(name = "users")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Users implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "uuid", unique = true)
    @NotBlank
    private String uuid;

    @Column(name = "email", unique = true)
    @NotBlank
    private String email;

    @Column(name = "firstname")
    private String firstname;

    @Column(name = "lastname")
    private String lastname;

    @Column(name = "phone_number")
    private String phoneNumber;

    @Column(nullable = false)
    private boolean enabled = false;

    @Column(name = "password")
    private String password;

    @Column(name = "image_path")
    private String image;

    @Column(name = "about_user")
    private String aboutUser;

    @Column(name = "id_video")
    private String idVideo;

    @Enumerated(EnumType.STRING)
    @Column(name = "role")
    private Role role;

    @UpdateTimestamp
    @Column(name = "updated_at")
    private LocalDateTime updatedAt;

    @CreationTimestamp
    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;

    @OneToOne(mappedBy = "user", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private VerificationToken verificationToken;



}
