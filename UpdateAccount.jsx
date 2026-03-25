import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const UpdateAccount = () => {

    const [customer, setCustomer] = useState({});   
    const { cid } = useParams(); 
    const navigate = useNavigate(); 

    const fetchCustometAccountDetails = async () => {
        const api = await fetch(`http://localhost:9090/api/customer/search/${cid}`);
        const resp = await api.json();
        console.log(resp);
        setCustomer(resp);
    }

    useEffect(() => {
        fetchCustometAccountDetails();
    }, []);
    
    const handleUpdateAccountBackButton =()=>{
        navigate(-1);
    }

    const handleUpdateAccountCancleBtn =()=>{
        navigate("/");
    }

    const handleCustomerAccountUpdateForm =async(e)=>{
        e.preventDefault();
        try {
            const api = await fetch("http://localhost:9090/api/customer/update",{
                method : "PUT",
                headers : {
                    "Content-Type" : "application/json"
                }, 
                body : JSON.stringify(customer)
            });
            const resp = await api.text();
            if(resp === "success"){
                navigate("/accountDetails");
                alert("Account Update successfull !");
            }else{
                navigate("/updateAccount");
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <div className="update_account_container">
                <div className="update_account_form">
                    <h2>Update Account</h2>
                    <form onSubmit={handleCustomerAccountUpdateForm}>
                        <div className="account_container_flex">
                            <div className="update_form_input">
                                <label htmlFor="account_no">Account No : </label>
                                <input type="number" name="account_no" id="account_no" value={customer?.account?.account_no}  placeholder="Enter account No !" readOnly required autoComplete="off" />
                            </div>
                            <div className="update_form_input">
                                <label htmlFor="mobile">Mobile : </label>
                                <input type="number" name="mobile" id="mobile" value={customer?.mobile} onChange={(e)=> setCustomer({...customer, [e.target.name]:e.target.value})} placeholder="Enter user mobile !" required autoComplete="off" />
                            </div>
                            <div className="update_form_input">
                                <label htmlFor="email">Email : </label>
                                <input type="email" name="email" id="email" value={customer?.email} onChange={(e)=> setCustomer({...customer, [e.target.name]:e.target.value})} placeholder="Enter user email !" required autoComplete="off" />
                            </div>
                            <div className="update_form_input">
                                <label htmlFor="aadhar_no">Aadhar No : </label>
                                <input type="number" name="aadhar_no" id="aadhar_no" value={customer?.kyc?.aadhar_no} onChange={(e)=> setCustomer({...customer, kyc : {...customer.kyc, aadhar_no : e.target.value}})} placeholder="Enter user aadhar no !" required autoComplete="off" />
                            </div>
                            <div className="update_form_input">
                                <label htmlFor="pancard_no">Pancard No : </label>
                                <input type="text" name="pancard_no" value={customer?.kyc?.pancard_no} id="pancard_no" onChange={(e)=> setCustomer({...customer, kyc: {...customer.kyc, pancard_no: e.target.value}})} placeholder="Enter user pancard no !" required autoCorrect="off" />
                            </div>
                            <div className="update_form_brn">
                                <input type="submit" value="Update Account"  className="account_update_btn"/>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}