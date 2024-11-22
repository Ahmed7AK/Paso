import React from "react";
import "./Login.css"
import logo from "../resources/paso-logo.png"
let LoginHeader = () => {
    return (
        <div className="paso-header">
            <img src={logo} alt="Paso Logo" className="paso-logo"/>
        </div>

    );
}
export default LoginHeader;