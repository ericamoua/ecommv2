import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import React, { useState } from 'react';
import "../Styles/Footer.css";
import "../Styles/Contact.css";

function Contact() {
    // Initialize state for each form input and for errors
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [comment, setComment] = useState('');
    const [errors, setErrors] = useState({});

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
    const validateForm = () => {
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

        return valid;
    };

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    firstName,
                    lastName,
                    email,
                    subject,
                    comment
                })
            };

            fetch('/addQue', options)
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    alert(data.message);
                })
                .catch(error => console.error(error));
        }
    };

    return (
        <>
            <Nav/>
            <div className="container">
                <h2>Contact Us!</h2>
                <form onSubmit={handleSubmit}>
                    <div className={`formc ${errors.firstName ? 'error' : ''}`}>
                        <label>First Name:</label>
                        <input
                            type="text"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                        {errors.firstName && <p>{errors.firstName}</p>}
                    </div>
                    <div className={`formc ${errors.lastName ? 'error' : ''}`}>
                        <label>Last Name:</label>
                        <input
                            type="text"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                        {errors.lastName && <p>{errors.lastName}</p>}
                    </div>
                    <div className={`formc ${errors.email ? 'error' : ''}`}>
                        <label>Email:</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {errors.email && <p>{errors.email}</p>}
                    </div>
                    <div className={`formc ${errors.subject ? 'error' : ''}`}>
                        <label>Subject:</label>
                        <input
                            type="text"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                        />
                        {errors.subject && <p>{errors.subject}</p>}
                    </div>
                    <div className={`formc ${errors.comment ? 'error' : ''}`}>
                        <label>Comments / Questions:</label>
                        <textarea
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                        />
                        {errors.comment && <p>{errors.comment}</p>}
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
            <Footer/>
        </>
    );
}

export default Contact;
