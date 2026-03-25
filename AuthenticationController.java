package com.durgasoft.banking_Application.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.durgasoft.banking_Application.entity.CustomerRegister;
import com.durgasoft.banking_Application.service.UserAuthentaticationMailService; 
import com.durgasoft.banking_Application.service.UserAuthentaticationService; 

@RestController
@RequestMapping(path = "/api/user")
@CrossOrigin(origins = "http://localhost:3000") 
public class AuthenticationController {
	
	@Autowired
	private UserAuthentaticationService authentaticationService; 	
	
	@Autowired	
	private UserAuthentaticationMailService mailService;
	
	@PostMapping("/register")
	public ResponseEntity<String> userRegister(@RequestBody CustomerRegister customerRegister){
		
		String status = authentaticationService.userRegister(customerRegister);	
		
		if("success".equals(status)) {
			mailService.sendMail(customerRegister.getEmail() , "Online Banking System (OBS) Register message !" , "In online banking system, You registation successfull ! Thank you for register. ");
		}
		
		return new ResponseEntity<>(status,HttpStatus.CREATED);	
	}
	
	@PostMapping("/login")
	public ResponseEntity<String> userLogin(@RequestBody CustomerRegister customerRegister){	
		
		String status = authentaticationService.userLogin(customerRegister);
		
		return new ResponseEntity<>(status,HttpStatus.OK);
	}
	
}


	