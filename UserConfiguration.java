package com.durgasoft.banking_Application.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@Configuration	
public class UserConfiguration {
	
	@Bean	
	BCryptPasswordEncoder getBcryBCryptPasswordEncoder() {
		
		return new BCryptPasswordEncoder();
	}

}




