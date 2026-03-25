package com.durgasoft.banking_Application.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

@Service
public class UserAuthentaticationMailServiceImpl implements UserAuthentaticationMailService{
	
	@Autowired	
	private JavaMailSender javaMailSender;
	
	@Value("${spring.mail.username}")
	private String myEmail;

	@Async	
	@Override
	public void sendMail (String to, String subject, String body) {	
		
		try {
			SimpleMailMessage mailMessage = new SimpleMailMessage();
			mailMessage.setFrom(myEmail);
			mailMessage.setTo(to);
			mailMessage.setSubject(subject);			
			mailMessage.setText(body);	
			
			javaMailSender.send(mailMessage);
		} catch (Exception e) {
			e.printStackTrace();	
		}
		
	}
}

