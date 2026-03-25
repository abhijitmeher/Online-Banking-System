package com.durgasoft.banking_Application.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.durgasoft.banking_Application.entity.Customer;

@Repository	
public interface TransactionRepository extends JpaRepository<Customer, Integer>{
	
	
}	





