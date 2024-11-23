import "./styling/Intro.css";
import secure from "../images/secure-paso.png";
import logo from "../images/7.png";
import coinIcon from "../images/coin.png";
import securityIcon from "../images/security.png";
import cloudIcon from "../images/cloud-access.png";
import banner from "../images/banner.png"

import { Link } from "react-router-dom";

const Intro = (props) => {
    if (props.device === "mobile") {
        return(
            <div id="intro-mb">
                <div id="intro-banner-mb">
                    <div id="intro-content-mb">
                        <div id="intro-banner-text-mb">
                            <h1>Stay Secure with PASO</h1>
                            <p>The ultimate solution for password security and management.</p>
                        </div>
                        <div id="intro-banner-buttons-mb">
                            <Link id="intro-signup-mb" to={"/signup"}>Get Started</Link>
                            <a id="intro-learn-more-mb" href={"#learnmore"}>Learn More</a>
                        </div>
                    </div>
                    <img id="intro-secure-mb" src={secure} alt={"Secure Page Logo"} />
                </div>
                <h1 id="slogan-mb">A better password manager for free, not profit</h1>
                <div id="vision-div-mb">
                    <img id="vision-logo-mb" src={logo} alt="Paso Logo"/>
                    <div id="vision-text-mb">
                        <h2>Our Vision</h2>
                        <p>At PASO, we believe everyone deserves uncompromised security without hidden costs. Built from the ground up to prioritize your privacy, PASO provides powerful encryption, easy-to-use features, and seamless access across devices—all for free. We're here to protect your digital world, not to profit from it. No premium plans, no upsells—just a trusted, reliable password manager focused on keeping your data safe and accessible. With PASO, security comes first, always</p>
                    </div>
                </div>
                <div id="key-facts-mb">
                    <div className="fact-mb">
                        <div className="fact-title-mb">
                            <img src={coinIcon} alt="Coin Icon"/>
                            <h3>100% Free, No Premium Plans</h3>
                        </div>
                        <p className="fact-text-mb">All features are accessible without fees, so you can secure your data without limits.</p>
                    </div>
                    <div className="fact-mb">
                        <div className="fact-title-mb">
                            <img src={securityIcon} alt="Security Lock Icon"/>
                            <h3>Privacy-First Design</h3>
                        </div>
                        <p className="fact-text-mb">Your information is encrypted with zero-knowledge architecture, ensuring only you have access to your passwords.</p>
                    </div>
                    <div className="fact-mb">
                        <div className="fact-title-mb">
                            <img src={cloudIcon} alt="Cloud Access Icon"/>
                            <h3>Effortless Access Anywhere</h3>
                        </div>
                        <p className="fact-text-mb">Seamlessly manage your passwords across all your devices, with robust security every step of the way.</p>
                    </div>
                </div>
                <img id="intro-divider-mb" src={banner} alt="Security Banner"/>
            </div> 
        )
    }
    else if (props.device === "desktop") {
        return(
            <div id="intro">
                <div id="intro-banner">
                    <div id="intro-content">
                        <div id="intro-banner-text">
                            <h1>Stay Secure with PASO</h1>
                            <p>The ultimate solution for password security and management.</p>
                        </div>
                        <div id="intro-banner-buttons">
                            <Link id="intro-signup" to={"/signup"}>Get Started</Link>
                            <a id="intro-learn-more" href={"#learnmore"}>Learn More</a>
                        </div>
                    </div>
                    <img id="intro-secure" src={secure} alt={"Secure Page Logo"} />
                </div>
                <h1 id="slogan">A better password manager for free, not profit</h1>
                <div id="vision-div">
                    <img id="vision-logo" src={logo} alt="Paso Logo"/>
                    <div id="vision-text">
                        <h2>Our Vision</h2>
                        <p>At PASO, we believe everyone deserves uncompromised security without hidden costs. Built from the ground up to prioritize your privacy, PASO provides powerful encryption, easy-to-use features, and seamless access across devices—all for free. We're here to protect your digital world, not to profit from it. No premium plans, no upsells—just a trusted, reliable password manager focused on keeping your data safe and accessible. With PASO, security comes first, always</p>
                    </div>
                </div>
                <div id="key-facts">
                    <div className="fact">
                        <div className="fact-title">
                            <img src={coinIcon} alt="Coin Icon"/>
                            <h3>100% Free, No Premium Plans</h3>
                        </div>
                        <p className="fact-text">All features are accessible without fees, so you can secure your data without limits.</p>
                    </div>
                    <div className="fact">
                        <div className="fact-title">
                            <img src={securityIcon} alt="Security Lock Icon"/>
                            <h3>Privacy-First Design</h3>
                        </div>
                        <p className="fact-text">Your information is encrypted with zero-knowledge architecture, ensuring only you have access to your passwords.</p>
                    </div>
                    <div className="fact">
                        <div className="fact-title">
                            <img src={cloudIcon} alt="Cloud Access Icon"/>
                            <h3>Effortless Access Anywhere</h3>
                        </div>
                        <p className="fact-text">Seamlessly manage your passwords across all your devices, with robust security every step of the way.</p>
                    </div>
                </div>
                <img id="intro-divider" src={banner} alt="Security Banner"/>
            </div> 
        )
    }
}

export default Intro;
