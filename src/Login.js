import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from './features/counter/loginSlice';
export default function Login() {
    const [username, setuserName] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login({ username, password }));
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>username:</label>
                <input
                    type="username"
                    value={username}
                    onChange={(e) => setuserName(e.target.value)}
                />
                <label>Password:</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}
