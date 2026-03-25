package com.durgasoft.banking_Application.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "KYC")
public class KYCTable {
	
	@Id
	@Column
	@GeneratedValue(strategy = GenerationType.IDENTITY)	
	private Integer kyc_id;
	
	@Column
	private Long aadhar_no;
	
	@Column	
	private String pancard_no;

	public KYCTable() {
		// Zero argument constructor !
	}

	public Integer getKyc_id() {
		return kyc_id;
	}

	public void setKyc_id(Integer kyc_id) {
		this.kyc_id = kyc_id;
	}

	public Long getAadhar_no() {
		return aadhar_no;
	}

	public void setAadhar_no(Long aadhar_no) {
		this.aadhar_no = aadhar_no;
	}

	public String getPancard_no() {
		return pancard_no;	
	}

	public void setPancard_no(String pancard_no) {
		this.pancard_no = pancard_no;
	}
	
}
