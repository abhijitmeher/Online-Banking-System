import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

export const Home =(props)=>{

    const {isLogin} = props;    

    const navigate = useNavigate();

    const handleRedirectHomePage =()=>{
        navigate("/");
    }

    return(
        <>
            <div className="Online_banking_application_Navbar">
                <div className="banking_application_nav_heading">
                    <div className="banking_app_head">
                        <h1 className="navbar_heading" onClick={handleRedirectHomePage}>Online Banking System</h1>
                    </div>
                </div>
                <div className="banking_application_link">
                    <ul className="list_of_link">
                        {isLogin ? (
                            <>
                                <li><NavLink className="navlink" to={"/"}>Home</NavLink></li>
                                <li><NavLink className="navlink" to={"/createAccount"}>Create Account</NavLink></li>
                                <li><NavLink className="navlink" to={"/accountDetails"}>Account Details</NavLink></li>
                                <li><NavLink className="navlink" to={"/accountDetails"}>Deposit</NavLink></li>
                                <li><NavLink className="navlink" to={"/accountDetails"}>Withdraw</NavLink></li>
                                <li><NavLink className="navlink" to={"/accountDetails"}>Transform Money</NavLink></li>
                                <li><NavLink className="navlink" to={"/transaction_History"}>Transaction History</NavLink></li>
                                <li><NavLink className="navlink" to={"/logout"}><button className="logout_btn">Logout</button></NavLink></li>
                            </>
                        ) : (
                            <>
                                <li><NavLink className="navlink" to={"/login"}><button className="login_btn">Login</button></NavLink></li>
                                <li><NavLink className="navlink" to={"/register"}><button className="register_btn">Register</button></NavLink></li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </>
    );
}