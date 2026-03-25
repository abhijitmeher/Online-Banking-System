import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const DeleteAccount =()=>{

    const {cid} = useParams();
    const navigate = useNavigate();

    const deleteCustomerAccount =async()=>{
        const api = await fetch(`http://localhost:9090/api/customer/delete/${cid}`,
            {
                method : "DELETE"
            }
        );
        const resp = await api.text();  
        if(resp === "success"){ 
            navigate("/accountDetails");
        }
    }

    useEffect(()=>{
        const replay = window.confirm(`Are you sure you want to delete this account !`);
        if(replay){
            deleteCustomerAccount();
        }else{
            navigate("/accountDetails");
        }
    },[]);
}