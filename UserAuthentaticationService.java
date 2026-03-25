package com.durgasoft.banking_Application.service;

import com.durgasoft.banking_Application.entity.CustomerRegister;

public interface UserAuthentaticationService {
	
	public String userLogin(CustomerRegister customerRegister);
	public String userRegister(CustomerRegister customerRegister);
	
}
	