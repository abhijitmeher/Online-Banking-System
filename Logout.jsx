import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Logout =({setIsLoginIn})=>{

    const navigate = useNavigate();
    setIsLoginIn(false);
    localStorage.removeItem("isLoginIn");
    navigate("/");
    window.location.reload();
    
}