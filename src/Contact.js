import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contacts.css";

export default function Contact() {
    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [message, setmessage] = useState("")
    const form =useRef();

    const sendEmail = (e) => {
        e.preventDefault(); 
        
        //console.log(e);
     
     console.log(form.current);
     const templateparams = {
        from_name: name + " " + email,
        to_name: "31august2001@gmail.com",
        feedback: message
        
     };
       emailjs
       .send("service_xykz366", "template_vo1plxs", templateparams, {
        publicKey: "WGBjEmL40eBkfMdso",
      })
       .then(function(response){
        console.log("SUCCESS!",response.status ,response.text);
        window.location.reload();
       }
       
       ,
       function(error){
        console.log("FAILED...",error);
       }
       );
       
    };
    return (
    <>
    <div>
        <div className="contact-me-card row">
            <div className="col-lg-6 col-md-5 col-sm-12 left-contact px-2 py-2">
                <span className="get-in-touch mx-4 my-5">Get in touch</span>
                <div className="py-5 d-flex justify-content-center">
                <dotlottie-player 
                    src="https://lottie.host/76e1b101-4247-4a34-8d3f-01ba35716e15/Dar7pEMu5d.json" 
                    background="transparent" 
                    speed="1" 
                    style={{width: "300px"}} 
                    loop 
                    autoplay
                ></dotlottie-player>
                </div>
            </div>
            <div className="col-lg-6 col-md-5 col-sm-12 my-auto">
                <form ref={form} className="d-flex flex-column card-contact-right" onSubmit={sendEmail}>
                    <div className="input-groups my-3 d-flex flex-column">
                        <label>Name</label>
                        <input
                            value={name}
                            onChange={(e) => {
                                setname(e.target.value);
                            }}
                            type="text" 
                            placeholder="Enter your name" 
                            className="input-group" 
                        />
                    </div>
                    <div className="input-groups my-3 d-flex flex-column">
                        <label>Email</label>
                        <input 
                            value={email}
                            onChange={(e) => {
                                setemail(e.target.value);
                            }}
                            type="text" 
                            placeholder="Enter your email" 
                            className="input-group" 
                        />
                    </div>
                    <div className="input-groups my-3 d-flex flex-column">
                        <label>Message</label>
                        <textarea 
                            value={message}
                            onChange={(e) => {
                                setmessage(e.target.value);
                            }}
                            placeholder="Enter your message" 
                            className="input-group" 
                            rows="2" 
                            cols="30" />
                    </div>
                    <div className="input-groups my-3 d-flex flex-column">
                        <input className="btn btn-success" type="submit" value="Send Message"/>{" "}
                    </div>
                </form>
            </div>
        </div>
    </div>
    </>
    ); 
}