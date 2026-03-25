package com.durgasoft.banking_Application.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "address")
public class Address {
	
	@Id
	@Column
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer addrs_id;
	
	@Column
	private String state;
	
	@Column
	private String dist;
	
	@Column
	private String city;
	
	@Column
	private String street;
	
	@Column	
	private Long pincode;
	
	public Address() {
		// Zero argument constructor !
	}

	public Integer getAddrs_id() {
		return addrs_id;
	}

	public void setAddrs_id(Integer addrs_id) {
		this.addrs_id = addrs_id;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getDist() {
		return dist;
	}

	public void setDist(String dist) {
		this.dist = dist;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getStreet() {
		return street;
	}

	public void setStreet(String street) {
		this.street = street;
	}

	public Long getPincode() {
		return pincode;
	}

	public void setPincode(Long pincode) {
		this.pincode = pincode;
	}
		
}
