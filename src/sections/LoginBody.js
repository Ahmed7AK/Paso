import React from "react";
import "./Login.css"
import logo from "../resources/paso-logo.png"


let LoginBody = () => {
    return(
        <div className="login-body">
            <div className="login-section">
                <img className="paso-logo dark-logo" src={logo} alt="Paso dark logo"/>
                <div className="login-text">
                        <h1>Welcome Back!</h1>
                        <p>Please enter your details.</p>
                </div>
                <div className="login-div">
                    <div className="input-div">
                        <p>Email:</p>
                        <input type="text" id="email" name="email"/>
                    </div>
                    <div className="input-div">
                        <p>Password:</p>
                        <input type="text" id="password" name="password"/>
                    </div>
                </div>
                <div className="sign-div">
                    <input type="button" id="signin" value="Sign In" />
                    <p>Forgot Password?</p>
                </div>
                <p id="signup">Don't have an account? Sign up</p>
            </div>
            <div className="info-section">
                <p>p diddy</p>
            </div>
        </div>
    );
}
export default LoginBody;