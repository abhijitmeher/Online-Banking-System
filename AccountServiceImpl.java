package com.durgasoft.banking_Application.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.durgasoft.banking_Application.entity.Customer;
import com.durgasoft.banking_Application.repository.AccountRepository;

@Service	
public class AccountServiceImpl implements AccountService{
	
	@Autowired	
	private AccountRepository accountRepository;

	@Override
	public String createAccount(Customer customer) {	
		
		try {
			Customer existing = accountRepository.findByAccount_AccNo(customer.getAccount().getAccount_no());
			
			if(existing == null) {
				
				accountRepository.save(customer);
				return "success";	
				
			}else {
				return "existed";
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return "failure";
	}

	@Override
	public List<Customer> getAccounts() {
			
		List<Customer> lists = accountRepository.findAll();
		
		if(!lists.isEmpty()) {
			return lists;	
		}
		
		return null;
	}

	@Override
	public Customer searchCustomer(Integer cid) {
		
		Optional<Customer> customer = accountRepository.findById(cid);
		
		if(customer.isPresent()) {
			return customer.get();
		}
		
		return null;	
	}

	@Override
	public String deleteAccount(Integer cid) {
		
		if(accountRepository.existsById(cid)) {
			accountRepository.deleteById(cid);
			return "success";
		}
		
		return "failure";
	}

	@Override
	public String updateaccount(Customer customer) {

		if(accountRepository.existsById(customer.getCid())) {
			accountRepository.save(customer);
			return "success";
		}
		
		return "failure";	
	}
}


