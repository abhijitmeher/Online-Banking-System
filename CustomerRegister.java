package com.durgasoft.banking_Application.entity;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "Register")	
public class CustomerRegister {
	
	@Id
	@Column
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer uid;
	
	@Column
	private String name;
	
	@Column
	private String password;
	
	@Column
	private String email;
	
	@Column
	private LocalDate dob;
	
	@Column
	private String gender;
	
	@Column
	private String address;
	
	@Column	
	private Long mobile;
	
	public CustomerRegister() {
		// Zero argument constructor 
		// super();
	}
	
	public CustomerRegister(Integer uid, String name, String password, String email, LocalDate dob, String gender, String address, Long mobile) {
		this.uid = uid;
		this.name = name;
		this.password = password;
		this.email = email;
		this.dob = dob;
		this.gender = gender;
		this.address = address;	
		this.mobile = mobile;
	}

	public Integer getUid() {
		return uid;
	}

	public void setUid(Integer uid) {
		this.uid = uid;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public LocalDate getDob() {
		return dob;
	}

	public void setDob(LocalDate dob) {
		this.dob = dob;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public Long getMobile() {
		return mobile;
	}

	public void setMobile(Long mobile) {
		this.mobile = mobile;
	}
	
}

/*
	 * name : "", password : "", email : "", dob : "", gender : "", address : "",
	 * mobile : ""
	 */