import "./styling/Navbar.css";
import logo from "../images/8.png";
import { Link } from "react-router-dom";

const Navbar = (props) => {
    if (props.device === "mobile") {
        return(
            <div id="navbar-mb">
                <div id="logo-div-mb" >
                    <img src={logo} alt="Paso logo"/>
                    <p>PASO</p>
                </div>
            </div>
        ); 
    }
    else if (props.device === "desktop") {
        return(
            <div id="navbar">
                <div id="logo-div">
                    <img src={logo} alt="Paso logo"/>
                    <p>PASO</p>
                </div>
                <div id="navbar-links">
                    <a href={"#features"}>Features</a>
                    <a href={"#pricing"}>Pricing</a>
                    <a href={"#about"}>About Us</a>
                    <a href={"#contact"}>Contact Us</a>
                </div>
                <div id="divider"></div>
                <div id="sign-div">
                    <Link id="signup" to={"/signup"}>Create an account</Link>
                    <Link id="signin" to={"/signin"}>Sign In</Link>
                </div>
            </div>
        ); 
    }

}

export default Navbar;