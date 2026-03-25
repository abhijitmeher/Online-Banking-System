package com.durgasoft.banking_Application.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;	
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "branch")
public class Branch {	
	
	@Id
	@Column
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer branch_id;
	
	@Column
	private String branch_name;
	
	@Column	
	private Long IFSC_code;	
	
	public Branch() {
		// super();	
	}
	
	public Integer getBranch_id() {
		return branch_id;	
	}

	public void setBranch_id(Integer branch_id) {
		this.branch_id = branch_id;
	}

	public String getBranch_name() {
		return branch_name;
	}

	public void setBranch_name(String branch_name) {
		this.branch_name = branch_name;
	}

	public Long getIFSC_code() {
		return IFSC_code;
	}

	public void setIFSC_code(Long iFSC_code) {
		IFSC_code = iFSC_code;
	}
	
}
