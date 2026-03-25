import React, { useState, useEffect } from "react";
import {image} from "../Images/landScape_image_01.jpg";

export const Slider =()=>{

    return(
        <>
           <div className="slide_main_comtainer">
                <div className="card_container">
                    <div className="card_flex_container">
                        <div className="card">
                            <div className="card_desc">
                                <h1>Banking Loans Service </h1>
                                <p>Banking loan services provide financial support to individuals and businesses for various needs like education, housing, or business expansion.</p>
                                <p>They offer different types of loans such as personal loans, home loans, and vehicle loans with flexible repayment options.</p>
                                <p>
                                    Banks assess eligibility based on income, credit history, and repayment capacity before approving a loan.
                                    Professional loan services ensure transparent terms, competitive interest rates, and customer guidance throughout the borrowing process.
                                </p>
                                <button className="load_service_btn">Book Now</button>
                            </div>
                            <div className="card_image">    
                                <img src="Bank_logo_02.jpeg" alt="card_loans_iameg" className="image_card" />
                            </div>
                        </div>
                        <div className="card">
                            <div className="card_desc">
                                <h1>Banking Transactions Service </h1>
                                <p>A car loan is a type of banking loan used to purchase a new or used vehicle.</p>
                                <p>Banks provide a specific amount, and the borrower repays it in monthly installments (EMIs) with interest.</p>
                                <p>
                                    The loan approval depends on factors like income, credit score, and repayment capacity.
                                </p>
                                <p>Car loans often offer flexible tenure options and competitive interest rates to make vehicle ownership easier.</p>
                                <button className="load_service_btn">Book Now</button>
                            </div>
                            <div className="card_image">    
                                <img src="Bank_lone_image.jpeg" alt="card_loans_iameg" className="image_card" />
                            </div>
                        </div>
                    </div>
                </div>
           </div>

        </>
    );
    
}

