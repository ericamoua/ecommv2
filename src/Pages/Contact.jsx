import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import React, { useState } from 'react';
import "../Styles/Footer.css";
import "../Styles/Contact.css";
import ReCAPTCHA from "react-google-recaptcha";

function Contact() {
    // Initialize state for each form input and for errors
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [comment, setComment] = useState('');
    const [errors, setErrors] = useState({});

    const [capychaIsDone, setCapychaIsDone] = useState(false);
    const YOUR_SITE_KEY = '6LeYBRcqAAAAAICErRmaGeu6gKKyqIVZNgK3evcw';

    // Function to handle Recaptcha
    function onChange() {
        console.log('changed')
        setCapychaIsDone(!capychaIsDone);
    }


    // Function to display error message
    const errorMsg = (field, msg) => {
        setErrors(prevErrors => ({
            ...prevErrors,
            [field]: msg
        }));
    };

    // Function to remove error message
    const removeErrorMsg = (field) => {
        setErrors(prevErrors => {
            const newErrors = { ...prevErrors };
            delete newErrors[field];
            return newErrors;
        });
    };

    // Function to validate the form
    const validateForm = (e) => {
        e.preventDefault();
        let valid = true;

        if (firstName.length < 1 || firstName.length >= 20) {
            errorMsg('firstName', firstName.length < 1 ? "First name is required" : "First name too long");
            valid = false;
        } else {
            removeErrorMsg('firstName');
        }

        if (lastName.length < 1 || lastName.length >= 20) {
            errorMsg('lastName', lastName.length < 1 ? "Last name is required" : "Last name too long");
            valid = false;
        } else {
            removeErrorMsg('lastName');
        }

        if (email === "" || !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            errorMsg('email', "Invalid email address");
            valid = false;
        } else {
            removeErrorMsg('email');
        }

        if (subject === "" || subject.length >= 50) {
            errorMsg('subject', "Subject is required");
            valid = false;
        } else {
            removeErrorMsg('subject');
        }

        if (comment === "" || comment.length >= 500) {
            errorMsg('comment', "Message is required");
            valid = false;
        } else {
            removeErrorMsg('comment');
        }
    };

    return (
        <>
            <Nav/>
            <div className="contact-container">
                <div className="contact-image">
                    <h1 class="contact-text">Connect With Us!</h1>
                </div>
                <div className="container">
                    <h2 className="contact-text-large">Where plants meet people!</h2>
                    <p className="contact-text-small">We're here to help! Please fill out the form below and a member of our team will be in touch as soon as possible.</p>
                    <form className="contact-form" onSubmit={validateForm}>
                        <div className={`formc ${errors.firstName ? 'error' : ''}`}>
                            <label>First Name:</label>
                            <input
                                className="user-input"
                                type="text"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                            {errors.firstName && <p>{errors.firstName}</p>}
                        </div>
                        <div className={`formc ${errors.lastName ? 'error' : ''}`}>
                            <label>Last Name:</label>
                            <input
                                className="user-input"
                                type="text"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                            {errors.lastName && <p>{errors.lastName}</p>}
                        </div>
                        <div className={`formc ${errors.email ? 'error' : ''}`}>
                            <label>Email:</label>
                            <input
                                className="user-input"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            {errors.email && <p>{errors.email}</p>}
                        </div>
                        <div className={`formc ${errors.subject ? 'error' : ''}`}>
                            <label>Subject:</label>
                            <input
                                className="user-input"
                                type="text"
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)}
                            />
                            {errors.subject && <p>{errors.subject}</p>}
                        </div>
                        <div className={`formc ${errors.comment ? 'error' : ''}`}>
                            <label>Comments / Questions:</label>
                            <textarea
                                className="text-area"
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}
                            />
                            {errors.comment && <p>{errors.comment}</p>}
                        </div>

                        <ReCAPTCHA
                            sitekey= {YOUR_SITE_KEY}
                            onChange={onChange}
                            onExpired={onChange}
                        />
                        {/* {if (capychaIsDone) {return <button>Submit</button>} else {return null}} */}
                        { capychaIsDone ? (<button>
                            <span class="circle1"></span>
                            <span class="circle2"></span>
                            <span class="circle3"></span>
                            <span class="circle4"></span>
                            <span class="circle5"></span>
                            <span class="text">Submit</span>
                        </button> ) : null }
                    </form>
                </div>
                </div>
            <Footer/>
        </>
    );
}

export default Contact;
