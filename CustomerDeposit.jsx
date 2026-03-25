import React, { useState } from "react";

export const CustomerDeposit = () => {

    const [account,setAccount] = useState({
        account_no : "",
        balance : ""
    });

    const handleDepositeButton = async()=>{
        try {   
            const api = await fetch(`http://localhost:9090/api/account/deposite`,
                {
                    method : "PUT",
                    headers : {
                        "Content-Type" : "application/json"
                    },
                    body : JSON.stringify(account)
                }
            );
            const resp = api.text();
            if(resp === "success"){
                alert("Deposit Success !");
            }else{
                alert("Deposite Failure !");
            }
        } catch (error) {
            console.log(error);
        }   
       setAccount({
            account_no : "",
            balance : ""
       });
    }
    
    const handleAccountData =(e)=>{
        setAccount({...account,[e.target.name]:e.target.value});
    }
    
    return (
        <>
            <div className="main_container">
                <div className="deposite_trancation">
                    <h2>Deposit Transaction !</h2>
                    <div className="deposition_description">
                        <div className="account_num_field">
                            <label>Enter Account No : </label>
                            <input type="number" name="account_no" value={account.account_no} onChange={handleAccountData} className="account_no" placeholder="Enter Account No !" />
                        </div>
                        <div className="amount_field">
                            <label>Enter Amount : </label>
                            <input type="number" name="balance" value={account.balance} onChange={handleAccountData} className="account_balance" placeholder="Enter Amount !" />
                        </div>
                        <div className="Deposit_btn">
                            <input type="submit" onClick={handleDepositeButton} className="deposite_btn" value="Deposit" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}