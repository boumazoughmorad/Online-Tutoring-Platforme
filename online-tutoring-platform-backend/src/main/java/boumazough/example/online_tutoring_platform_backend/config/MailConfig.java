package boumazough.example.online_tutoring_platform_backend.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.JavaMailSenderImpl;

import java.util.Properties;

@Configuration
public class MailConfig {
    @Value("${spring.mail.username}")
    private String mailUsername;

    @Value("${spring.mail.host}")
    private String hostMail;
    @Value("${spring.mail.password}")
    private String passwordMail;
    @Bean
    public JavaMailSender javaMailSender() {
        JavaMailSenderImpl mailSender = new JavaMailSenderImpl();
        mailSender.setHost(hostMail);
        mailSender.setPort(587);
        mailSender.setUsername(mailUsername);
        mailSender.setPassword(passwordMail);

        Properties props = mailSender.getJavaMailProperties();
        props.put("mail.transport.protocol", "smtp");
        props.put("mail.smtp.auth", "true");
        props.put("mail.smtp.starttls.enable", "true");
        props.put("mail.debug", "true"); // optional

        return mailSender;
    }
}