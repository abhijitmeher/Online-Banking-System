import React from "react";
import { FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export const Footer =()=>{

    const styles = {
        container: {
            display: "flex",
            gap: "15px",
            justifyContent: "center",
            marginTop: "20px",
        },
        icon: {
            color: "#fff",
            fontSize: "20px",
            width: "40px",
            height: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "50%",
            textDecoration: "none",
        },
    };

    return(
        <>
            <div className="footer_container">
                <div className="footer_bank_name">
                    <div className="footer_data">
                        <h2 className="footer_bank_name_heading">Smart<span className="color_blue">Bank</span></h2>
                        <p>Secure and reliable digital banking services <br/> for everyone.</p>
                    </div>
                    <div style={styles.container}>
                        <a href="http://www.facebook.com" style={{ ...styles.icon, background: "#3b5998" }}>
                            <FaFacebook />
                        </a>

                        <a href="http://www.twitter.com" style={{ ...styles.icon, background: "#1DA1F2" }}>
                            <FaTwitter />
                        </a>

                        <a href="http://www.instagram.com" style={{ ...styles.icon, background: "#E4405F" }}>
                            <FaInstagram />
                        </a>

                        <a href="http://www.youtube.com" style={{ ...styles.icon, background: "#FF0000" }}>
                            <FaYoutube />
                        </a>

                        <a href="http://www.linkedin.com" style={{ ...styles.icon, background: "#0077B5" }}>
                            <FaLinkedinIn />
                        </a>
                    </div>
                </div>
                <div className="footer_quick_links">
                    <div>
                        <h2 className="quick_lines_heading">Quick Links</h2>
                        <hr className="footer_underline"/>
                    </div>
                    <div className="quick_link">
                        <NavLink to={"/#"}>Home</NavLink>
                        <NavLink to={"/#"}>About</NavLink>
                        <NavLink to={"/#"}>Service</NavLink>
                        <NavLink to={"#"}>Login / Register</NavLink>
                    </div>
                </div>
                <div className="banking_service">
                    <div className="bank_service_heading">
                        <h2>Banking Services</h2>
                        <hr className="footer_underline"/>
                    </div>
                    <div className="footer_bank_service">
                        <NavLink to={"#"}>Account Management</NavLink>
                        <NavLink to={"#"}>Found Transafor</NavLink>
                        <NavLink to={"#"}>Transfor History</NavLink>
                        <NavLink to={"#"}>Loan Service</NavLink>
                    </div>
                </div>
                <div className="footer_contact_details">
                    <div>
                        <h2 className="footer_contact">Contact Us</h2>
                        <hr className="footer_underline"/>
                    </div>
                    <p>Address : SmartBank st, City, In</p>
                    <p>Phone : +91 7837383989</p>
                    <p>Email : smartbank123@gmail.com</p>
                </div>
            </div>
            <div className="footer_desc">
                <p className="footer_desc_head1">Never share your OTP or password with anyone.</p>
                <p className="footer_desc_head1">@2026 SmartBank. All rights reserved.</p>
            </div>
        </>
    );
}