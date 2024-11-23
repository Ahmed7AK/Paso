import "./styling/Features.css";
import secureIcon from "../images/secure.png";
import keyIcon from "../images/key.png";
import platformIcon from "../images/platforms.png";
import freeIcon from "../images/free.png";
import graphic from "../images/3d-graphic.png";
import { Link } from "react-router-dom";

const Features = () => {
    return(
        <div id="features-container">
            <h1>Key Features</h1>
            <div id="features-div">
                <div className="feature">
                    <img src={secureIcon} alt="Secure Icon"/>
                    <p>End-to-End Encryption</p>
                </div>
                <div className="feature">
                    <img src={keyIcon} alt="Key Icon"/>
                    <p>Password Generator</p>
                </div>
                <div className="feature">
                    <img src={platformIcon} alt="Platforms Icon"/>
                    <p>Cross-Platform Access</p>
                </div>
                <div className="feature">
                    <img src={freeIcon} alt="Free Icon"/>
                    <p>Free Access Anywhere</p>
                </div>
            </div>
            <div id="features-banner">
                <div id="features-banner-text">
                    <h1>Ready to Secure Your Digital Life?</h1>
                    <Link id="features-signup" to={"/signup"}>Get Started</Link>
                </div>
                <img src={graphic} alt="3D Security Graphic" />
            </div>
        </div>
    );
}

export default Features;