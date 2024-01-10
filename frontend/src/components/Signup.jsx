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
        <form onSubmit={handleSubmit}>
            <div>
                <label>First Name</label>
                <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First Name"
                />
            </div>
            <div>
                <label>Last Name</label>
                <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last Name"
                />
            </div>
            <div>
                <label>Email</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                />
            </div>
            <div>
                <label>Password</label>
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Password"
                />
            </div>
            <div>
                <label>Street</label>
                <input
                    type="text"
                    name="street"
                    value={formData.street}
                    onChange={handleChange}
                    placeholder="Street"
                />
            </div>
            <div>
                <label>Postal Code</label>
                <input
                    type="text"
                    name="postalCode"
                    value={formData.postalCode}
                    onChange={handleChange}
                    placeholder="Postal Code"
                />
            </div>
            <div>
                <label>City</label>
                <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="City"
                />
            </div>
            <div>
                <label>Phone</label>
                <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone"
                />
            </div>
            <div>
                <label>Role</label>
                <input
                    type="text"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    placeholder="Role"
                />
            </div>
            <button type="submit">Sign Up</button>
        </form>
    );
}

export default Signup;
