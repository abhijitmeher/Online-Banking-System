package com.durgasoft.banking_Application.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.durgasoft.banking_Application.entity.Account;
import com.durgasoft.banking_Application.entity.Customer;
import com.durgasoft.banking_Application.service.TransactionService;

@RestController
@RequestMapping("/api/account")
@CrossOrigin(origins = "http://localhost:3000")	
public class TransactionController {
	
	@Autowired
	private TransactionService service; 
		
	@PutMapping("/deposite")
	public ResponseEntity<String> deposit(@RequestBody Customer customer){
		
		String status = service.deposit(customer);
		
		return new ResponseEntity<>(status,HttpStatus.OK); 
	}	
	
	@PutMapping("/withdraw")
	public ResponseEntity<String> withdraw(@RequestBody Customer customer){
		
		String status = service.withdraw(customer);
		
		return new ResponseEntity<>(status,HttpStatus.OK);
	}
	
}



