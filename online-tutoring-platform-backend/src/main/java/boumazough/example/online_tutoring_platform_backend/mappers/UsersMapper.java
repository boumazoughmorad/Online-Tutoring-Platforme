package boumazough.example.online_tutoring_platform_backend.mappers;

import boumazough.example.online_tutoring_platform_backend.model.dto.request.users.UserRegistrationRequest;
import boumazough.example.online_tutoring_platform_backend.model.entity.Users;
import boumazough.example.online_tutoring_platform_backend.model.entity.VerificationToken;
import org.mapstruct.*;

@Mapper(componentModel = "spring")
public interface UsersMapper {


    @Mapping(target = "uuid", expression = "java(java.util.UUID.randomUUID().toString())")
    @Mapping(target = "id", ignore = true)
    @Mapping(target = "firstname", source = "firstname")
    @Mapping(target = "lastname", source = "lastname")
    @Mapping(target = "role", ignore = true)
    @Mapping(target = "enabled", constant = "false")
    @Mapping(target = "createdAt", ignore = true)
    @Mapping(target = "updatedAt", ignore = true)
    @Mapping(target = "verificationToken", ignore = true)
    Users toUser(UserRegistrationRequest registrationRequest);

    @Mapping(target = "user", ignore = true)
    VerificationToken toVerificationToken(String token, Users user);

//    @Mapping(target = "id", source = "user.id")
//    @Mapping(target = "studentId", source = "studentId")
//    @Mapping(target = "major", source = "major")
//    @Mapping(target = "enrollmentDate", source = "enrollmentDate")
//    Users toStudent(UserRegistrationRequest registrationRequest);
//
//    @Mapping(target = "id", source = "user.id")
//    @Mapping(target = "tutorId", source = "tutorId")
//    @Mapping(target = "department", source = "department")
//    @Mapping(target = "hireDate", source = "hireDate")
//    Users toTutor(UserRegistrationRequest registrationRequest);

    @BeanMapping(nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
    void updateUserFromRequest(UserRegistrationRequest request, @MappingTarget Users user);

    @AfterMapping
    default void setUserInVerificationToken(@MappingTarget VerificationToken verificationToken, Users user) {
        verificationToken.setUser(user);
    }
}