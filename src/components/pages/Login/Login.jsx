import React from 'react';
import './login.css';
const Login = () => {
    return <div className='login'>
        <div className="container">
            <div className="background-image"></div>
            <form className="login-form">
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" required />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    </div>;
};

export default Login;
