package boumazough.example.online_tutoring_platform_backend.service.Email;

import boumazough.example.online_tutoring_platform_backend.model.entity.Users;
import jakarta.mail.MessagingException;
import jakarta.mail.internet.InternetAddress;
import jakarta.mail.internet.MimeMessage;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.MessageSource;
import org.springframework.context.NoSuchMessageException;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.thymeleaf.context.Context;
import org.thymeleaf.spring6.SpringTemplateEngine;

import java.io.UnsupportedEncodingException;
import java.util.Locale;

@Service
@RequiredArgsConstructor
@Slf4j
public class EmailService {
    private final JavaMailSender mailSender;
    private final MessageSource messageSource;
    private final SpringTemplateEngine templateEngine;
    private final SpringTemplateEngine textTemplateEngine; // Added text template engine

    @Value("${app.base-url}")
    private String appBaseUrl;

    @Value("${spring.mail.username}")
    private String mailUsername;

    public void sendVerificationEmail(Users user, String token, Locale locale) throws MessagingException {
        String subject = getLocalizedMessage("email.verification.subject", locale);
        String confirmationUrl = appBaseUrl + "/auth/verify?token=" + token;
        String expirationTime = "24 hours"; // Could be dynamic

        Context context = new Context(locale);
        context.setVariable("name", user.getFirstname() + " " + user.getLastname());
        context.setVariable("confirmationUrl", confirmationUrl);
        context.setVariable("expirationTime", expirationTime);
        context.setVariable("supportEmail", mailUsername);

        String htmlContent = templateEngine.process("email/verification", context);
        String textContent = textTemplateEngine.process("email/verification.txt", context);


            MimeMessage message = mailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(message, true, "UTF-8");


            try {
                helper.setTo(user.getEmail());
                helper.setSubject(subject);
                helper.setText(textContent, htmlContent);

                // Safe way to set from address with personal name
                InternetAddress fromAddress = new InternetAddress(mailUsername, "Online Tutor", "UTF-8");
                helper.setFrom(fromAddress);

                mailSender.send(message);
            } catch (UnsupportedEncodingException e) {
                // Fallback to simple address if encoding fails
                helper.setFrom(mailUsername);
                mailSender.send(message);
                throw new MessagingException("Failed to encode sender name, sent without personal name", e);
            }


    }

    private String getLocalizedMessage(String code, Locale locale) {
        try {
            return messageSource.getMessage(code, null, locale);
        } catch (NoSuchMessageException e) {
            log.warn("Translation not found for {} in locale {}, falling back to default", code, locale);
            return messageSource.getMessage(code, null, Locale.ENGLISH);
        }
    }
}