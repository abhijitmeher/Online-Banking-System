package com.durgasoft.banking_Application.service;

import com.durgasoft.banking_Application.entity.Customer;

public interface TransactionService {	
	
	public String deposit(Customer customer);
	public String withdraw(Customer customer);
	
}


	

