package boumazough.example.online_tutoring_platform_backend.repository;

import boumazough.example.online_tutoring_platform_backend.model.entity.Users;
import boumazough.example.online_tutoring_platform_backend.model.entity.VerificationToken;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VerificationTokenRepository extends JpaRepository<VerificationToken, Long> {

    VerificationToken findByToken(String token);

    VerificationToken findByUser(Users user);

    void deleteByUser(Users user);
}