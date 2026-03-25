import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Navigation } from "../components/Navigation";
import { Home } from "./Home";
import { Login } from "./Login";
import { Slider } from "./Slider";
import { Register } from "./Register";
import { Logout } from "./Logout";
import { CreateAccount } from "./CreateAccount"; 
import { Errorpage } from "./Errorpage";
import { AccountDetails } from "./AccountDetails";
import { ShowCustomerAccountDetails } from "./ShowCustomerAccountDetails";
import { DeleteAccount } from "./DeleteAccount";
import { UpdateAccount } from "./UpdateAccount";
import { CustomerDeposit } from "./CustomerDeposit";
import { TransactionHistory } from "./TransactionHistory";

export const NavigationRouter =()=>{

    const [isLoginIn,setIsLoginIn] = useState(localStorage.getItem("isLoginIn")=="true"); 
    
    const router = createBrowserRouter([
        {
            path : "/",
            element : <Navigation isLogin={isLoginIn} />,    
            errorElement : <Errorpage />,
            children : [
                {
                    path : "/",
                    element : <Slider />
                },
                {
                    path : "/login",
                    element : localStorage.getItem("isLoginIn")=="true" ? <Slider /> : <Login setIsLoginIn={setIsLoginIn} />
                },
                {
                    path : "/register",
                    element : localStorage.getItem("isLoginIn") == "true" ? <Slider/> : <Register />
                },
                {
                    path : "/logout",
                    element : <Logout setIsLoginIn={setIsLoginIn} />
                },
                {
                    path : "/createAccount",
                    element : <CreateAccount />
                },
                {
                    path : "/accountDetails",
                    element : <AccountDetails />
                },
                {
                    path : "/showCustometAccount/:cid",
                    element : <ShowCustomerAccountDetails />
                },
                {
                    path : "/deleteAccount/:cid",   
                    element : <DeleteAccount />
                },
                {
                    path : "/updateAccount/:cid",
                    element : <UpdateAccount />
                },
                {
                    path : "/transaction_History",
                    element : <TransactionHistory />
                }
            ]
        }
    ]);
    
    return <RouterProvider router={router} />
}
