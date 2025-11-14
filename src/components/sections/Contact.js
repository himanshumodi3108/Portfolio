import React, { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";
import "./contacts.css";
import { useToast } from "../../context/ToastContext";

export default function Contact() {
    const { t } = useTranslation();
    const { success: showSuccess, error: showError } = useToast();
    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [mobile, setmobile] = useState("")
    const [message, setmessage] = useState("")
    const [errors, setErrors] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const [submitStatus, setSubmitStatus] = useState(null) // 'success' or 'error'
    const form = useRef();

    const validateForm = () => {
        const newErrors = {};
        
        if (!name.trim()) {
            newErrors.name = t('contact.name') + " is required";
        }
        
        if (!email.trim()) {
            newErrors.email = t('contact.email') + " is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            newErrors.email = "Please enter a valid email address";
        }
        
        // Mobile is optional, but if provided, validate format
        if (mobile.trim() && !/^[\d\s\-+()]+$/.test(mobile.trim())) {
            newErrors.mobile = "Please enter a valid mobile number";
        }
        
        if (!message.trim()) {
            newErrors.message = t('contact.message') + " is required";
        } else if (message.trim().length < 10) {
            newErrors.message = "Message must be at least 10 characters long";
        }
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const sendEmail = (e) => {
        e.preventDefault(); 
        
        if (!validateForm()) {
            return;
        }
        
        // Check if environment variables are set
        const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
        const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
        const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
        
        if (!serviceId || !templateId || !publicKey) {
            console.error("EmailJS configuration missing:", {
                serviceId: !!serviceId,
                templateId: !!templateId,
                publicKey: !!publicKey
            });
            setSubmitStatus('error');
            showError("Email service is not configured. Please check environment variables.", 5000);
            return;
        }
        
        setIsLoading(true);
        setSubmitStatus(null);
        
        // Format message to include sender's email and mobile (if provided)
        let formattedMessage = message;
        let senderInfo = `\n\n---\nSender Information:\nEmail: ${email}`;
        if (mobile.trim()) {
            senderInfo += `\nMobile: ${mobile.trim()}`;
        }
        formattedMessage += senderInfo;
        
        const templateparams = {
            from_name: name,
            from_email: email,
            mobile: mobile.trim() || "Not provided",
            to_name: process.env.REACT_APP_EMAILJS_TO_NAME || "Himanshu Kumar Modi",
            to_email: process.env.REACT_APP_EMAILJS_TO_EMAIL || "31august2001@gmail.com",
            feedback: formattedMessage,
            message: formattedMessage
        };
        
        emailjs
            .send(
                serviceId,
                templateId,
                templateparams,
                {
                    publicKey: publicKey,
                }
            )
            .then(function(response){
                console.log("SUCCESS!", response.status, response.text);
                setSubmitStatus('success');
                showSuccess(t('contact.success'), 5000);
                setname("");
                setemail("");
                setmobile("");
                setmessage("");
                setErrors({});
                setIsLoading(false);
                // Clear success message after 5 seconds
                setTimeout(() => setSubmitStatus(null), 5000);
            })
            .catch(function(error){
                console.error("EmailJS Error:", error);
                let errorMessage = t('contact.error');
                
                // Provide more specific error messages
                if (error.text) {
                    errorMessage = `Error: ${error.text}`;
                } else if (error.message) {
                    errorMessage = `Error: ${error.message}`;
                }
                
                setSubmitStatus('error');
                showError(errorMessage, 7000);
                setIsLoading(false);
                // Clear error message after 7 seconds
                setTimeout(() => setSubmitStatus(null), 7000);
            });
    };
    return (
    <>
    <div>
        <div className="contact-me-card row">
            <div className="col-lg-6 col-md-5 col-sm-12 left-contact px-2 py-2">
                <span className="get-in-touch mx-4 my-5">Get in touch</span>
                <div className="py-5 d-flex justify-content-center align-items-center" style={{minHeight: "400px"}}>
                    <dotlottie-player 
                        src="https://lottie.host/76e1b101-4247-4a34-8d3f-01ba35716e15/Dar7pEMu5d.json" 
                        background="transparent" 
                        speed="1" 
                        style={{width: "100%", maxWidth: "400px", height: "auto"}}
                        loop 
                        autoplay
                    ></dotlottie-player>
                </div>
            </div>
            <div className="col-lg-6 col-md-5 col-sm-12 my-auto mx-auto">
                <form ref={form} className="d-flex flex-column card-contact-right" onSubmit={sendEmail} aria-label="Contact form">
                    <div className="input-groups my-3 d-flex flex-column">
                        <label htmlFor="name">{t('contact.name')} <span className="required">*</span></label>
                        <input
                            id="name"
                            name="name"
                            value={name}
                            onChange={(e) => {
                                setname(e.target.value);
                                if (errors.name) setErrors({...errors, name: ''});
                            }}
                            type="text" 
                            placeholder="John Doe" 
                            className={`input-group ${errors.name ? 'input-error' : ''}`}
                            aria-required="true"
                            aria-invalid={errors.name ? 'true' : 'false'}
                            aria-describedby={errors.name ? 'name-error' : undefined}
                        />
                        {errors.name && <span id="name-error" className="error-message" role="alert">{errors.name}</span>}
                    </div>
                    <div className="input-groups my-3 d-flex flex-column">
                        <label htmlFor="email">{t('contact.email')} <span className="required">*</span></label>
                        <input 
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => {
                                setemail(e.target.value);
                                if (errors.email) setErrors({...errors, email: ''});
                            }}
                            type="email" 
                            placeholder="johndoe@abc.com" 
                            className={`input-group ${errors.email ? 'input-error' : ''}`}
                            aria-required="true"
                            aria-invalid={errors.email ? 'true' : 'false'}
                            aria-describedby={errors.email ? 'email-error' : undefined}
                        />
                        {errors.email && <span id="email-error" className="error-message" role="alert">{errors.email}</span>}
                    </div>
                    <div className="input-groups my-3 d-flex flex-column">
                        <label htmlFor="mobile">{t('contact.mobile')} <span className="optional">({t('contact.optional')})</span></label>
                        <input 
                            id="mobile"
                            name="mobile"
                            value={mobile}
                            onChange={(e) => {
                                setmobile(e.target.value);
                                if (errors.mobile) setErrors({...errors, mobile: ''});
                            }}
                            type="tel" 
                            placeholder="+1 234 567 8900" 
                            className={`input-group ${errors.mobile ? 'input-error' : ''}`}
                            aria-required="false"
                            aria-invalid={errors.mobile ? 'true' : 'false'}
                            aria-describedby={errors.mobile ? 'mobile-error' : undefined}
                        />
                        {errors.mobile && <span id="mobile-error" className="error-message" role="alert">{errors.mobile}</span>}
                    </div>
                    <div className="input-groups my-3 d-flex flex-column">
                        <label htmlFor="message">{t('contact.message')} <span className="required">*</span></label>
                        <textarea 
                            id="message"
                            name="message"
                            value={message}
                            onChange={(e) => {
                                setmessage(e.target.value);
                                if (errors.message) setErrors({...errors, message: ''});
                            }}
                            placeholder="Message...." 
                            className={`input-group ${errors.message ? 'input-error' : ''}`}
                            rows="4" 
                            cols="30"
                            aria-required="true"
                            aria-invalid={errors.message ? 'true' : 'false'}
                            aria-describedby={errors.message ? 'message-error' : undefined}
                        />
                        {errors.message && <span id="message-error" className="error-message" role="alert">{errors.message}</span>}
                    </div>
                    {submitStatus === 'success' && (
                        <div className="alert alert-success" role="alert">
                            <i className="fas fa-check-circle"></i> {t('contact.success')}
                        </div>
                    )}
                    {submitStatus === 'error' && (
                        <div className="alert alert-danger" role="alert">
                            <i className="fas fa-exclamation-circle"></i> {t('contact.error')}
                        </div>
                    )}
                    <div className="input-groups my-3 d-flex flex-column">
                        <button 
                            className="btn btn-success" 
                            type="submit" 
                            disabled={isLoading}
                            aria-busy={isLoading}
                        >
                            {isLoading ? (
                                <>
                                    <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                    {t('contact.sending')}
                                </>
                            ) : (
                                t('contact.send')
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    </>
    ); 
}