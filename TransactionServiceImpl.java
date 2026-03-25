package com.durgasoft.banking_Application.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.durgasoft.banking_Application.entity.Customer;
import com.durgasoft.banking_Application.repository.TransactionRepository;

@Service	
public class TransactionServiceImpl implements TransactionService{
	
	@Autowired	
	private TransactionRepository repository;

	@Override
	public String deposit(Customer customer) {
		
		try {
			 if(customer.getAccount().getBalance()>0) {
				 Customer customer2 =	repository.findById(customer.getCid()).get();
				 
				 Long total_balance = customer2.getAccount().getBalance()+customer.getAccount().getBalance();
				
				 customer2.getAccount().setBalance(total_balance);
			
				 repository.save(customer2);
				 return "success";
			 }else {
				 return "failure";	
			 }
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return "failure";
	}

	@Override
	public String withdraw(Customer customer) {	
		
		try {			
			Customer customer2 = repository.findById(customer.getCid()).get();
			
			if(customer.getAccount().getBalance()<=0) {
				return "failure";
			}
			
			if(customer2.getAccount().getBalance()>0) {
				Long tot_balance = customer2.getAccount().getBalance()-customer.getAccount().getBalance();
				customer2.getAccount().setBalance(tot_balance);
				repository.save(customer2);
				return "success";
			}else {
				return "failure";
			}
		} catch (Exception e) {	
			e.printStackTrace();
		}
			
		return "failure";
	}
}	
	
