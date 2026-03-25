package com.durgasoft.banking_Application.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.durgasoft.banking_Application.entity.CustomerRegister;

@Repository	
public interface UserRepository extends JpaRepository<CustomerRegister, Integer>{
	
	public CustomerRegister findByEmail(String email);
	
}

	


