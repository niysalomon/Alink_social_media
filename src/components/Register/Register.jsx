import React from 'react';
import './register.css';

export default function Register() {
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
                    <input type="text" placeholder="Username" className="loginInput" />
                    <input type="text" placeholder="Email" className="loginInput" />
                    <input type="text" placeholder="Password" className="loginInput" />
                    <input type="text" placeholder="Re-Password" className="loginInput" />
                   <button className="loginButton">Sign up</button>
                   <span className="loginForget">Already has account?</span>
                   <button className="loginRegisterButton">Sign in</button>
                </div>
            </div>
        </div>

        
    </div>
    )
}
