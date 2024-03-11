// frontend/components/RegistrationForm.js
"use client"
import { useState } from 'react';

const RegistrationForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const handleRegistration = async (e) => {
        e.preventDefault();
        const response = await fetch('/api/register/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password, email })
        });
        if (response.ok) {
            // Handle successful registration
        } else {
            // Handle registration error
        }
    };

    return (
        <form onSubmit={handleRegistration}>
            <div className='flex flex-col gap-2'>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                <button type="submit">Register</button>
            </div>
        </form>
    );
};

export default RegistrationForm;
