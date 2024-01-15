import React, { useState } from 'react';
import { useNavigate } from "react-router";
function Signup() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        street: '',
        postalCode: '',
        city: '',
        phone: '',
        role: ''
    });
    const navigate = useNavigate();
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        const URL = "http://localhost:8080/api/Signup/"; //  API endpoint
        const settings = {
            method: "POST",
            body: JSON.stringify({
            first_name: formData.firstName,  
            last_name: formData.lastName,   
            email: formData.email,
            password: formData.password,
            street: formData.street,
            postal_code: formData.postalCode,
            city: formData.city,
            phone: formData.phone,
            role: formData.role
            }),
            headers: {
                "Content-Type": "application/json"
            }
        };
       
        try {
            const response = await fetch(URL, settings);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            console.log("data here", data);
            navigate("/");
        
            if (data.success) {
                console.log('Signup successful:' , data.messag);
                // Further actions on successful signup, e.g., redirect or display success message
            } else {
                console.log('Signup failed:', data.message);
                // Handle signup failure, e.g., display error message to the user
            }
        } catch (error) {
            console.error('Error during signup:', error.message);
            // Handle network or other errors
        }
    };
    

    return (
        <div className="login-wrapper">
            <h4>Register</h4>
        <form onSubmit={handleSubmit}>
            <div>
            <label>
                <h4>First Name *</h4>
                <input
                    className="input_1"
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First Name"
                />
                <h4>Last Name *</h4>
                <input
                    className="input_1"
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last Name"
                />
                <h4>Email *</h4>
                <input
                    className="input_1"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                />
                <h4>Password *</h4>
                <input
                    className="input_1"
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Password"
                />
                <h4>Street</h4>
                <input
                    className="input_1"
                    type="text"
                    name="street"
                    value={formData.street}
                    onChange={handleChange}
                    placeholder="Street"
                />
                <h4>Postal Code</h4>
                <input
                    className="input_1"
                    type="text"
                    name="postalCode"
                    value={formData.postalCode}
                    onChange={handleChange}
                    placeholder="Postal Code"
                />
                <h4>City</h4>
                <input
                    className="input_1"
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="City"
                />
                <h4>Phone</h4>
                <input
                    className="input_1"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone"
                />
                <h4>Role</h4>
                <input
                    className="input_1"
                    type="text"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    placeholder="Role"
                />
            </label>
            </div>
            <br />
            <button type="submit">Sign Up</button>
        </form>
    </div>
    );
}

export default Signup;
