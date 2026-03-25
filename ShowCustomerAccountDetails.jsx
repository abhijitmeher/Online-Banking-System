import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const ShowCustomerAccountDetails = () => {

    const { cid } = useParams();
    const [customer, setCustomer] = useState({});
    const navigate = useNavigate();

    const getCustomerAccountDetails = async () => {
        try {
            const api = await fetch(`http://localhost:9090/api/customer/search/${cid}`);
            const resp = await api.json();
            setCustomer(resp);
            console.log(resp);
        } catch (error) {
            console.log(error);
        }
    }

    const handleDepositeButton = async()=>{
        // console.log(customer);
        try {   
            const api = await fetch(`http://localhost:9090/api/account/deposite`,
                {
                    method : "PUT",
                    headers : {
                        "Content-Type" : "application/json"
                    },
                    body : JSON.stringify(customer)
                }
            );
            const resp =await api.text();
            if(resp === "success"){
                // navigate(`/showCustometAccount/${cid}`);
                window.location.reload();
                alert("Deposite Successfully !");
            }else{
                window.location.reload();
                alert("Deposite Failure !");
            }
        } catch (error) {
            console.log(error);
        }   
    }

    const handleWithdrawButton = async()=>{
         try {   
            const api = await fetch(`http://localhost:9090/api/account/withdraw`,
                {
                    method : "PUT",
                    headers : {
                        "Content-Type" : "application/json"
                    },
                    body : JSON.stringify(customer)
                }
            );
            const resp =await api.text();
            if(resp === "success"){
                // navigate(`/showCustometAccount/${cid}`);
                window.location.reload();
                alert("Withdraw Successfully !");
            }else{
                alert("Withdraw Failure !");
                window.location.reload();
            }
        } catch (error) {
            console.log(error); 
        }   
    }

    useEffect(() => {
        getCustomerAccountDetails();
    }, []);

    const handleBackPage = () => {
        navigate(-1);
    }

    const handleCancleButton = () => {
        navigate("/");
    }

    return (
        <>
            <div className="customer_account_details_container">
                <h1 className="heading">Customer Account Details !</h1>
                <div className="account_design_container">
                    <table border="1" cellPadding="0" cellSpacing="0" className="customer_account_table">
                        <tr>
                            <th>Customer properties</th>
                            <th>Customer Account Details</th>
                        </tr>
                        <tr>
                            <td>Name</td>
                            <td>{customer.name}</td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td>{customer.email}</td>
                        </tr>
                        <tr>
                            <td>Mobile</td>
                            <td>{customer.mobile}</td>
                        </tr>
                        <tr>
                            <td>Gender</td>
                            <td>{customer.gender}</td>
                        </tr>
                        <tr>
                            <td>DOB</td>
                            <td>{customer.dob}</td>
                        </tr>
                        <tr>
                            <td>Street</td>
                            <td>{customer?.address?.street}</td>
                        </tr>
                        <tr>
                            <td>City</td>
                            <td>{customer?.address?.city}</td>
                        </tr>
                        <tr>
                            <td>Distick</td>
                            <td>{customer?.address?.dist}</td>
                        </tr>
                        <tr>
                            <td>State</td>
                            <td>{customer?.address?.state}</td>
                        </tr>
                        <tr>
                            <td>Pincode</td>
                            <td>{customer?.address?.pincode}</td>
                        </tr>
                        <tr>
                            <td>Account No</td>
                            <td>{customer?.account?.account_no}</td>
                        </tr>
                        <tr>
                            <td>Account Type</td>
                            <td>{customer?.account?.account_type}</td>
                        </tr>
                        <tr>
                            <td>Account Balance</td>
                            <td>{customer?.account?.balance}</td>
                        </tr>
                        <tr>
                            <td>Branch Name</td>
                            <td>{customer?.account?.branch?.branch_name}</td>
                        </tr>
                        <tr>
                            <td>IFSC Code</td>
                            <td>{customer?.account?.branch?.IFSC_code}</td>
                        </tr>
                        <tr>
                            <td>Aadhar No</td>
                            <td>{customer?.kyc?.aadhar_no}</td>
                        </tr>
                        <tr>
                            <td>Pancard No</td>
                            <td>{customer?.kyc?.pancard_no}</td>
                        </tr>
                    </table>
                </div>
                <div className="back_cancle_btn">
                    <button className="back_btn" onClick={handleBackPage}>Back</button>
                    <button className="cancle_btn" onClick={handleCancleButton}>Cancle</button>
                </div>
            </div>
            <div className="main_transaction_controller">
                <div className="main_container">
                    <div className="deposite_trancation">
                        <h2>Deposit Transaction !</h2>
                        <div className="deposition_description">
                            <div className="account_num_field">
                                <label>Enter Account No : </label>
                                <input type="number" name="account_no" value={customer?.account?.account_no} onChange={(e)=> setCustomer({...customer,account : {...customer.account, account_no:e.target.value}})} className="account_no" placeholder="Enter Account No !" readOnly />
                            </div>
                            <div className="amount_field">
                                <label>Enter Amount : </label>
                                <input type="number" name="balance"  onChange={(e)=> setCustomer({...customer,account : {...customer.account, balance:e.target.value}})} className="account_balance" placeholder="Enter Amount !" />
                            </div>
                            <div className="Deposit_btn">
                                <input type="submit" className="deposite_btn" onClick={handleDepositeButton} value="Deposit" />
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="main_container">
                    <div className="deposite_trancation">   
                        <h2>Withdraw Transaction !</h2>
                        <div className="deposition_description">
                            <div className="account_num_field">
                                <label>Enter Account No : </label>
                                <input type="number" name="account_no" value={customer?.account?.account_no} onChange={(e)=> setCustomer({...customer,account : {...customer.account, account_no:e.target.value}})} className="account_no" placeholder="Enter Account No !" readOnly />
                            </div>
                            <div className="amount_field">
                                <label>Enter Amount : </label>
                                <input type="number" name="balance"  onChange={(e)=> setCustomer({...customer,account : {...customer.account, balance:e.target.value}})} className="account_balance" placeholder="Enter Amount !" />
                            </div>
                            <div className="Deposit_btn">
                                <input type="submit" onClick={handleWithdrawButton} className="deposite_btn" value="Withdran" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}


// Back
// Close !

