import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Register =()=>{

    const [user,setUser] = useState({
        name : "",
        password : "",
        email : "",
        dob : "",
        gender : "",
        address : "",
        mobile : ""
    });

    const navigate = useNavigate();

    const handleUserData =(e)=>{
        const {name,value} = e.target;
        setUser({...user,[name]:value});
    }

    const handleUserRegisterForm = async(e)=>{
        e.preventDefault();

        const api = await fetch("http://localhost:9090/api/user/register",
            {
                method : "POST",
                headers : {
                    "Content-Type" : "application/json"
                },
                body : JSON.stringify(user)
            }
        );

        const resp = await api.text();

        if(resp === "success"){
            navigate("/login");
        }else{
            alert("User Register failure !");
        }
        
        setUser({
            name : "",
            password : "",
            email : "",
            dob : "",
            gender : "",
            address : "",
            mobile : ""
        });
    }

    return(
        <>
            <div className="register_container">
                <h2 className="user_register_form">User Register</h2>
                <div className="register_field_container">
                    <form onSubmit={handleUserRegisterForm}>
                        <div className="register_flex_container">
                            <div className="regsiter_input_field">
                                <label htmlFor="name">User Name : </label>
                                <input type="text" name="name" id="name" value={user.name} onChange={handleUserData} placeholder="Enter user Full Name !" required autoComplete="off"/>
                            </div>
                             <div className="regsiter_input_field">
                                <label htmlFor="password">User Password : </label>
                                <input type="password" name="password" id="password" value={user.password} onChange={handleUserData} placeholder="Enter user password !" required autoComplete="off"/>
                            </div>
                             <div className="regsiter_input_field">
                                <label htmlFor="email">Email : </label>
                                <input type="text" name="email" id="email" value={user.email} onChange={handleUserData} placeholder="Enter user email !" required autoComplete="off"/>
                            </div>
                             <div className="regsiter_input_field">
                                <label>DOB : </label>
                                <input type="date" name="dob" id="dob" value={user.dob} className="register_form_date" onChange={handleUserData} placeholder="Enter user dob !" required autoComplete="off"/>
                            </div>
                             <div className="regsiter_input_redio">
                                <label>Gender : </label>
                                <input type="radio" name="gender" id="male" value="Male" checked={user.gender=="Male"} onChange={handleUserData}/><label htmlFor="male">Male</label>
                                <input type="radio" name="gender" id="female" value="Female" checked={user.gender=="Female"} onChange={handleUserData}/><label htmlFor="female">Female</label>
                                <input type="radio" name="gender" id="other" value="Other" checked={user.gender=="Other"} onChange={handleUserData}/><label htmlFor="other">Other</label>
                            </div>
                            <div className="regsiter_input_field">
                                <label>Address : </label>
                                <select name="address" className="address" value={user.address} onChange={handleUserData}>
                                    <option value="">-- Select City --</option>
                                    <option value="Junagarh">Junagarh</option>
                                    <option value="Bhawanipatna">Bhawanipatna</option>
                                    <option value="Kesinga">Kesinga</option>
                                    <option value="Jaipatna">Jaipatna</option>
                                    <option value="Palash">Palash</option>
                                    <option value="Naktiguda">Naktiguda</option>
                                    <option value="Jaipatna">Jaipatna</option>
                                </select>
                            </div>
                            <div className="regsiter_input_field">
                                <label>Mobile : </label>
                                <input type="number" name="mobile" value={user.mobile} className="register_form_mob" onChange={handleUserData} id="mobile" placeholder="Enter user mobile !" required autoComplete="off"/>
                            </div>
                             <div className="regsiter_submit_btn">
                                <input type="submit" className="register_btn" value="Register" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}