package com.durgasoft.banking_Application.entity;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "account")
public class Account {
	
	@Id
	@Column	
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer account_id;		
	
	@Column
	private Long account_no;
	
	@Column
	private String account_type;	
	
	@Column		
	private Long balance;	
	
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "branch_id")
	private Branch branch;
	
	public Account() {
		// Zero argument constructor !
	}

	public Integer getAccount_id() {
		return account_id;
	}

	public void setAccount_id(Integer account_id) {
		this.account_id = account_id;
	}

	public Long getAccount_no() {
		return account_no;
	}

	public void setAccount_no(Long account_no) {
		this.account_no = account_no;
	}

	public String getAccount_type() {
		return account_type;
	}

	public void setAccount_type(String account_type) {
		this.account_type = account_type;
	}

	public Long getBalance() {
		return balance;
	}

	public void setBalance(Long balance) {
		this.balance = balance;
	}

	public Branch getBranch() {
		return branch;
	}

	public void setBranch(Branch branch) {
		this.branch = branch;
	}
	
}

