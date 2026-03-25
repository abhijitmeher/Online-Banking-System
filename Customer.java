package com.durgasoft.banking_Application.entity;

import java.time.LocalDate;

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
@Table(name = "customer")
public class Customer {
	
	@Id
	@Column
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer cid;
	
	@Column
	private String name;	
	
	@Column
	private Long mobile;
	
	@Column
	private String email;
	
	@Column	
	private String gender;
	
	@Column
	private LocalDate dob;
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "address_id")
	private Address address;
	
	@OneToOne(cascade = CascadeType.ALL) 
	@JoinColumn(name = "account_id")
	private Account account; 	
	
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "kyc_id")
	private KYCTable kyc;
	
	
	public Customer() {	
		// super();	
		// Zero argument constructor !
	}

	public Integer getCid() {
		return cid;
	}

	public void setCid(Integer cid) {
		this.cid = cid;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Long getMobile() {
		return mobile;
	}

	public void setMobile(Long mobile) {
		this.mobile = mobile;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public LocalDate getDob() {
		return dob;
	}

	public void setDob(LocalDate dob) {
		this.dob = dob;
	}

	public Address getAddress() {
		return address;
	}

	public void setAddress(Address address) {
		this.address = address;
	}

	public Account getAccount() {
		return account;
	}

	public void setAccount(Account account) {
		this.account = account;
	}

	public KYCTable getKyc() {
		return kyc;
	}

	public void setKyc(KYCTable kyc) {
		this.kyc = kyc;
	}
	
}
