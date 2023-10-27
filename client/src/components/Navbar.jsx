import React from "react";
import "../styles/Navbar.css";
import bglogo from "../images/js-logo.png";
import smlogo from "../images/js-logo-sm.png";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logo">
                <div className="bglogo">
                    <img
                        src={bglogo}
                        alt=""
                    />
                </div>
                <div className="smlogo">
                    <img
                        src={smlogo}
                        alt=""
                    />
                </div>
            </div>
            <div className="links">
                <a href="#">Learn</a>
                <a href="#">Resourses</a>
                <a href="#">About</a>
            </div>
        </div>
    );
};

export default Navbar;
