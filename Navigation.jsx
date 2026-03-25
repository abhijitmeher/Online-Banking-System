import React from "react";
import { Home } from "../pages/Home";
import { Slider } from "../pages/Slider";
import { Footer } from "../pages/Footer";
import { Login } from "../pages/Login";
import { Outlet } from "react-router-dom";

export const Navigation =(props)=>{

    const {isLogin} = props;

    return(
        <>
            <Home  isLogin={isLogin}/>

            <Outlet />

           <Footer />
            
        </>
    );
}
