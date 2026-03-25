import React, { use, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login =({setIsLoginIn})=>{

    const [user,setUser] = useState({
        email : "",
        password : ""
    }); 

    const navigate = useNavigate();

    const handleUserData =(e)=>{
        const {name,value} = e.target;
        setUser({...user,[name]:value});
    }

   const handleUserLoginForm = async(e)=>{
        e.preventDefault();

        const api = await fetch("http://localhost:9090/api/user/login",
            {
                method : "POST",
                headers : {
                    "Content-Type" : "application/json"
                },
                body : JSON.stringify(user)
            }
        );
        const resp = await api.text();
        console.log(user+" / "+resp);
        if(resp == "success"){
            localStorage.setItem("isLoginIn",true);
            window.location.reload();
            navigate("/");
        }else{
            navigate("/login");
        }
        setUser({
            email : "",
            password : ""
        });
   }

    return(
        <>
            <div className="login_container">
                <h2 className="user_login_form">User Login</h2>
                <div className="login_form_design">
                    <form onSubmit={handleUserLoginForm}>
                        <div className="login_flex_design">
                            <div className="input_field">
                                <label htmlFor="email">User Email : </label>
                                <input type="text" name="email" value={user.email} onChange={handleUserData} id="email" placeholder="Enter user email !" required autoComplete="off"/>
                            </div>
                            <div className="input_field">
                                <label htmlFor="password">Password : </label>
                                <input type="password" name="password" id="password" value={user.password} onChange={handleUserData} placeholder="Enter user password !" required autoComplete="off"/>
                            </div>
                             <div className="login_form_design">
                                <input type="submit" className="login_btn" value="Login" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </>
    );
}

//  const handleUserLoginForm = async(e)=>{
//         e.preventDefault();
//         setIsLoginIn(true);
//         const api = await fetch("http://localhost:9090/api/user/login",
//             {
//                 method : "POST",
//                 headers : {
//                     "Content-Type" : "application/json" 
//                 },
//                 body : JSON.stringify(user)
//             }
//         );
//         const resp = await api.text();
//          console.log(user+" / "+resp);

//         if(resp === "success"){  
//             localStorage.setItem("isLoginIn","true");
//             navigate("/");
//         }else{
//             navigate("/login");
//         }

//         setUser({
//             email : "",
//             password : ""
//         });
//     }