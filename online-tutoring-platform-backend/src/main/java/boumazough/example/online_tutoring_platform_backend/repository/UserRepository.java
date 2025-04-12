package boumazough.example.online_tutoring_platform_backend.repository;

import boumazough.example.online_tutoring_platform_backend.model.entity.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<Users, Long> {

    Optional<Users> findByEmail(String username);
    Boolean existsByEmail(String email);
}