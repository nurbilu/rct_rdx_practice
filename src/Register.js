import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from './features/counter/registerSlice'; // Ensure you've created this action

const Register = () => {
    const [username, setuserName] = useState('');
    const [password, setPassword] = useState('');
    // Add additional state as necessary, e.g., for a username
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Dispatch the register action with the form data
        dispatch(register({ username, password }));
    };

    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>username:</label>
                    <input
                        type="username"
                        value={username}
                        onChange={(e) => setuserName(e.target.value)}
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                {/* Add additional inputs as needed */}
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;
