package com.durgasoft.banking_Application.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.durgasoft.banking_Application.entity.Customer;

@Repository
public interface AccountRepository extends JpaRepository<Customer, Integer>{

	@Query("from Account as a where a.account_no = :account_no ")
	public Customer findByAccount_AccNo(@Param("account_no") Long account_no);
	
	
}		


