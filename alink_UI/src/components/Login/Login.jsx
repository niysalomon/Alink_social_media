import React from 'react';
import './login.css';

export default function Login() {
    return (
        <div className="login">
        <div className="loginWrapper">
            <div className="loginleft">
               <h3 className="loginLogo">Alink</h3>
               <span className="loginDesc">
                   Get connected with friends and families
               </span>
            </div>
            <div className="loginright">
                <div className="loginBox">
                    <input type="text" placeholder="Email" className="loginInput" />
                    <input type="text" placeholder="Password" className="loginInput" />
                   <button className="loginButton">Log In</button>
                   <span className="loginForget">Forget Password</span>
                   <button className="loginRegisterButton">Register</button>
                </div>
            </div>
        </div>

        
    </div>
    )
}
