import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const CreateAccount = () => {

    const [customer,setCustomer] = useState({
        name : "",
        mobile : "",
        email : "",
        dob : "",
        gender : "",
        address : {
            state : "",
            dist : "",
            city : "",
            street : "",
            pincode : ""
        },
        account : {
            account_no : "",
            account_type : "",
            balance : "",
            branch : {
                branch_name : "",
                IFSC_code : ""
            }
        },
        kyc : {
            aadhar_no : "",
            pancard_no : "",
        }
    });
    
    const navigate = useNavigate();

    const handleCreateAccountCustomerForm = async(e)=>{
        e.preventDefault();
        try {
            const resp_api = await fetch("http://localhost:9090/api/customer/createAccount",
                {
                    method : "POST",
                    headers : {
                        "Content-Type" : "application/json"
                    },
                    body : JSON.stringify(customer)
                }
            );
            const resp = await resp_api.text();
            console.log(resp);
            if(resp === "success"){
                navigate("/");
                alert("account created succesfully !");
            }else{
                alert("Create account failure !");
            }
        } catch (error) {   
            console.log(error);
        }
        console.log(customer);

        setCustomer({
            name : "",
            mobile : "",
            email : "",
            dob : "",
            gender : "",
            address : {
                state : "",
                dist : "",
                city : "",
                street : "",
                pincode : ""
            },
            account : {
                account_no : "",
                account_type : "",
                balance : "",
                branch : {
                    branch_name : "",
                    IFSC_code : ""
                }
            },
            kyc : {
                aadhar_no : "",
                pancard_no : "",
            }
         });
    }

    return (
        <>
            <div className="create_new_account_component">
                <h2 className="create_account_heading">Create New Account !</h2>
                <div className="create_account_flex_container">
                    <form onSubmit={handleCreateAccountCustomerForm}>
                        <div className="create_account_main_contaner">
                            <div className="input_field_block">

                                <div className="input_box">
                                    <label>Name : </label>
                                    <input type="text" name="name" id="name" value={customer.name} onChange={(e)=> setCustomer({...customer,[e.target.name]:e.target.value})}  placeholder="Enter user name !"  autoComplete="off" />
                                </div>
                                <div className="input_box">
                                    <label>Mobile : </label>
                                    <input type="number" name="mobile" id="mobile" value={customer.mobile} onChange={(e)=> setCustomer({...customer,[e.target.name]:e.target.value})} placeholder="Enter user mobile !"  autoComplete="off" />
                                </div>
                                <div className="input_box">
                                    <label>Email : </label>
                                    <input type="text" name="email" id="email" value={customer.email} onChange={(e)=> setCustomer({...customer,[e.target.name]:e.target.value})}  placeholder="Enter user email !"  autoComplete="off" />
                                </div>
                                <div className="input_box">
                                    <label>DOB : </label>
                                    <input type="date" name="dob" id="dob" value={customer.dob} onChange={(e)=> setCustomer({...customer,[e.target.name]:e.target.value})}  placeholder="Enter user dob !"  autoComplete="off" />
                                </div>

                                <div className="input_box">
                                    <label>State : </label>
                                    <input type="text" name="state" id="state" value={customer.address.state} onChange={(e)=> setCustomer({...customer, address: { ...customer.address, state: e.target.value}})} placeholder="Enter user state !"  autoComplete="off" />
                                </div>
                                <div className="input_box">
                                    <label>Dist : </label>
                                    <input type="text" name="dist" id="dist" value={customer.address.dist} onChange={(e)=> setCustomer({...customer,address: {...customer.address, dist : e.target.value}})}  placeholder="Enter user dist !"  autoComplete="off" />
                                </div>
                                <div className="input_box">
                                    <label>City : </label>
                                    <input type="text" name="city" id="city" value={customer.address.city} onChange={(e)=> setCustomer({...customer,address: {...customer.address, city: e.target.value}})} placeholder="Enter user city !"  autoComplete="off" />
                                </div>
                                <div className="input_box">
                                    <label>Street : </label>
                                    <input type="text" name="street" id="street" value={customer.address.street} onChange={(e)=> setCustomer({...customer,address:{ ...customer.address, street : e.target.value}})}  placeholder="Enter user street !"  autoComplete="off" />
                                </div>
                                  
                                <div className="input_box_radio">
                                    <label>Gender : </label>
                                    <input type="radio" name="gender" id="male" value="Male" checked={customer.gender=="Male"} onChange={(e) => setCustomer({...customer, [e.target.name]:e.target.value})} /> <label htmlFor="male">Male</label>
                                    <input type="radio" name="gender" id="female" value="Female" checked={customer.gender=="Female"}  onChange={(e)=> setCustomer({...customer, [e.target.name]:e.target.value})}/><label htmlFor="female">Female</label>
                                    <input type="radio" name="gender" id="other" value="Other" checked={customer.gender=="Other"}  onChange={(e)=> setCustomer({...customer, [e.target.name]:e.target.value})}/><label htmlFor="other">Other</label>
                                </div>
                            </div>

                            <div className="input_field_block">
                                <div className="input_box">
                                    <label>Pincode : </label>
                                    <input type="number" name="pincode" value={customer.address.pincode} onChange={(e)=> setCustomer({...customer,address : {...customer.address, pincode : e.target.value }})} id="pincode"  placeholder="Enter user pincode !"  autoComplete="off" />
                                </div>
                                <div className="input_box">
                                    <label>Aadhar No : </label>
                                    <input type="number" name="aadhar_no" value={customer.kyc.aadhar_no} onChange={(e)=> setCustomer({...customer,kyc : {...customer.kyc, aadhar_no: e.target.value}})}  id="aadhar_no"  placeholder="Enter user aadhar_no !"  autoComplete="off" />
                                </div>
                                <div className="input_box">
                                    <label>Pancard No : </label>
                                    <input type="text" name="pancard_no" value={customer.kyc.pancard_no} onChange={(e)=> setCustomer({...customer,kyc : {...customer.kyc, pancard_no: e.target.value}})} id="pancard_no"  placeholder="Enter user pancard !"  autoComplete="off" />
                                </div>

                                <div className="input_box">
                                    <label>Account No : </label>
                                    <input type="number" name="account_no" value={customer.account.account_no} onChange={(e)=> setCustomer({...customer,account : {...customer.account, account_no:e.target.value}})}   id="account_no" placeholder="Enter user account no  !"  autoComplete="off" />
                                </div>
                                <div className="input_box">
                                    <label>Account Type : </label>
                                    <input type="text" name="account_type" value={customer.account.account_type} onChange={(e) => setCustomer({...customer,account : {...customer.account, account_type:e.target.value}})} id="account_type" placeholder="Enter user account Type !"  autoComplete="off" />
                                </div>
                                <div className="input_box">
                                    <label>Account Balance : </label>
                                    <input type="number" name="balance" value={customer.account.balance} onChange={(e)=> setCustomer({...customer,account : {...customer.account, balance:e.target.value}})} id="balance" placeholder="Enter user account balance !"  autoComplete="off" />
                                </div>

                                <div className="input_box">
                                    <label>Branch Name : </label>
                                    <input type="text" name="branch_name" value={customer.account.branch.branch_name} onChange={(e)=> setCustomer({...customer, account: {...customer.account, branch: {...customer.account.branch, branch_name:e.target.value }}})}  id="branch_name" placeholder="Enter user branch Name !"  autoComplete="off" />
                                </div>
                                <div className="input_box">
                                    <label>IFSC Code : </label>
                                    <input type="number" name="IFSC_code" value={customer.account.branch.IFSC_code}  onChange={(e)=> setCustomer({...customer, account: {...customer.account, branch: {...customer.account.branch,IFSC_code:e.target.value }}})} id="ifsc_code" placeholder="Enter user IFSC Code !"  autoComplete="off" />
                                </div>
                            </div>
                        </div>
                        <div className="create_account_btn">
                            <input type="submit" className="create_account_submit_btn" value="Create Account" />
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

