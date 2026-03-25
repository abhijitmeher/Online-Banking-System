package com.durgasoft.banking_Application.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.durgasoft.banking_Application.entity.Customer;
import com.durgasoft.banking_Application.service.AccountService;
import com.durgasoft.banking_Application.service.UserAuthentaticationMailService;

@RestController
@RequestMapping("/api/customer")
@CrossOrigin(origins = "http://localhost:3000")
public class AccountController {	
	
	@Autowired	
	private AccountService accountService;
	
	@Autowired	
	private UserAuthentaticationMailService authentaticationMailService;

	@PostMapping("/createAccount")
	public ResponseEntity<String> createAccount(@RequestBody Customer customer){
		
		String status = accountService.createAccount(customer);		
		
		if("success".equals(status)) {
			authentaticationMailService.sendMail(customer.getEmail(),"Online Banking System(OBS) message !", "In Online Banking Systen, Your new account created successfully.");
		}
		
		return new ResponseEntity<>(status,HttpStatus.CREATED);
	}
	
	@GetMapping("/getAccounts")
	public ResponseEntity<List<Customer>> getAllCustomerAccountDetails(){	
		
		List<Customer> customers = accountService.getAccounts();
		
		return new ResponseEntity<>(customers,HttpStatus.OK);
	}
	
	@GetMapping("/search/{cid}")
	public ResponseEntity<Customer> searchCustomer(@PathVariable("cid") Integer cid){
		
		Customer customer = accountService.searchCustomer(cid);
				
		return new ResponseEntity<>(customer,HttpStatus.OK);
	}
	
	@DeleteMapping("/delete/{cid}")
	public ResponseEntity<String> deleteAccount(@PathVariable("cid") Integer cid){	
		
		String status = accountService.deleteAccount(cid);
		
		return new ResponseEntity<>(status,HttpStatus.OK);
	}
	
	@PutMapping("/update")	
	public ResponseEntity<String> updateAccount(@RequestBody Customer customer){
		
		String status = accountService.updateaccount(customer);
		
		return new ResponseEntity<>(status,HttpStatus.OK);
	}
			
}	

