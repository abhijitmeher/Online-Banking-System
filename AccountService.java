package com.durgasoft.banking_Application.service;

import java.util.List;

import com.durgasoft.banking_Application.entity.Customer;

public interface AccountService {
	
	public String createAccount(Customer customer);
	public List<Customer> getAccounts();	
	public Customer searchCustomer(Integer cid);
	public String deleteAccount(Integer cid);
	public String updateaccount(Customer customer);
		
}
