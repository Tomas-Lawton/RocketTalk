import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./Authentication.css";

const Authentication = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setIsLogin] = useState(true);
    const navigate = useNavigate();

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (isLogin) {
            // if user is available
            if (email === 't@g.com' && password === 'g') {
                console.log("start sessions")
                navigate('/session');
            } else {
                alert('Invalid email or password');
            }
        } else {
            // create a new user
            // check valid inputs? sanatise
            console.log("signup")

            if (email && password) {
                navigate('/session');
            } else {
                alert('Please provide an email and password');
            }
        }

    };

    const toggleAuthenticationMode = () => {
        setIsLogin((prevIsLogin) => !prevIsLogin);
    };

    return (
        <div className="auth-container">
            <h1 className="auth-title text-neutral-900">{isLogin ? 'Welcome back!' : 'Join the RocketTalk Community!'}</h1>
            <form onSubmit={handleFormSubmit}>
                <label>
                    Email:
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="auth-input"
                        placeholder="Enter your email"
                    />
                </label>
                <br />
                <label>
                    Password:
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="auth-input"
                        placeholder="Enter your password"
                    />
                </label>
                <br />
                <button type="submit" className="auth-button">
                    {isLogin ? 'Login' : 'Sign Up'}
                </button>
            </form>
            <p className="auth-toggle">
                {isLogin ? "Don't have an account?" : "Already have an account?"}{' '}
                <button onClick={toggleAuthenticationMode} className="auth-toggle-button">
                    {isLogin ? 'Sign Up' : 'Login'}
                </button>
            </p>
        </div>
    );
};

export default Authentication;
