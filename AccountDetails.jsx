import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export const AccountDetails =()=>{

    const[customer,setCustomer] = useState([]);
    const[loading,setLoading] = useState(true);

    const fetchAllAccountDetailsAPI =async()=>{
        try{
            const account_api = await fetch("http://localhost:9090/api/customer/getAccounts");
            const accounts = await account_api.json();
            setCustomer(accounts);
            setLoading(false);
            console.log(accounts);
        }catch(error){
            console.log(error);
            setLoading(false);
        }
    }

    useEffect(()=>{
        fetchAllAccountDetailsAPI();
    },[]);

    if(loading){
        return(
            <>
               <div className="loading_stage">
                    <h1>Loading.... !</h1>
               </div>
            </>
        );
    }

    return(
        <>
            <div className="account_details_container">
                <h2 className="account_view_details">View Account Details !</h2>
                <div className="account_details_tables">
                    <table border="1" className="table_container" cellPadding="0" cellSpacing="0">
                        <tr>
                            <th>Cid</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Mobile</th>
                            <th>Gender</th>
                            <th>City</th>
                            <th>Aadhar No</th>
                            <th>Pancard No</th>
                            <th>Account No</th>
                            <th>Account Type</th>
                            <th>Branch Name</th>
                            <th>Edit</th>
                            <th>Delete</th>
                            <th>View</th>
                        </tr>
                        {
                            customer.map((e)=>{
                                return(
                                    <>
                                        <tr>
                                            <td>{e.cid}</td>
                                            <td>{e.name}</td>
                                            <td>{e.email}</td>
                                            <td>{e.mobile}</td>
                                            <td>{e.gender}</td>
                                            <td>{e.address.city}</td>
                                            <td>{e.kyc.aadhar_no}</td>
                                            <td>{e.kyc.pancard_no}</td>
                                            <td>{e.account.account_no}</td>
                                            <td>{e.account.account_type}</td>
                                            <td>{e.account.branch.branch_name}</td> 
                                            <td className="edit_btn"><NavLink to={`/updateAccount/${e.cid}`}>edit</NavLink></td>
                                            <td className="delete_btn"><NavLink to={`/deleteAccount/${e.cid}`}>delete</NavLink></td>
                                            <td className="show_account_view"><NavLink to={`/showCustometAccount/${e.cid}`}>view</NavLink></td>
                                        </tr>
                                    </>
                                );
                            })
                        }
                    </table>
                </div>
            </div>
        </>
    );
}

