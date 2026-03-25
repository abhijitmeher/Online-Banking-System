package com.durgasoft.banking_Application.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import com.durgasoft.banking_Application.entity.CustomerRegister;
import com.durgasoft.banking_Application.repository.UserRepository;	

@Service
public class UserAuthentaticationServiceImpl implements UserAuthentaticationService{
	
	@Autowired	
	private UserRepository repository;
	
	@Autowired	
	private BCryptPasswordEncoder passwordEncoder;
	
	/*
	 *  User Login 
	 */

	@Override
	public String userLogin(CustomerRegister customerRegister) {
		
		CustomerRegister user2 = repository.findByEmail(customerRegister.getEmail());
			
		if(user2 != null && passwordEncoder.matches(customerRegister.getPassword(), user2.getPassword())) {
			return "success";
		}
		
		return "failure";
	}	
	
	/*
	 *  User Register 
	 */	

	@Override
	public String userRegister(CustomerRegister customerRegister) {
		
		String password_encoder = passwordEncoder.encode(customerRegister.getPassword());
		customerRegister.setPassword(password_encoder);
		
			try {
				repository.save(customerRegister);	
				return "success";
			} catch (Exception e) {
				e.printStackTrace();
			}	
			
		return "failure";
	}

}

