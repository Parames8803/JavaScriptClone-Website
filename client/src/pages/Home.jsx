import React from "react";
import "../styles/Home.css";

const Home = () => {
    return (
        <div className="home">
            <div className="title">
                <div className="boxcontent">
                    <p>CELEBRATING</p>
                </div>
                <div className="normcontent">
                    <p>27 years of JavaScript</p>
                </div>
                <div className="libraries">
                    <p>
                        1,444,231 <b>libraries</b>
                        <span>and counting...</span>
                    </p>
                </div>
            </div>
            <div className="tryjs">
                <div className="ready">
                    <p>Ready to try JavaScript?</p>
                </div>
                <div className="trycontent">
                    <p>
                        Begin learning here by typing in your first name
                        surrounded by quotation marks, and ending with <br />a
                        semicolon. For example, you could type the name
                        <span>"Jamie";</span> and the hit enter
                    </p>
                </div>
                <div className="input">
                    <div className="icon"><i class="fa-thin fa-greater-than fa-xs"></i></div>
                    <input type="text" />
                </div>
            </div>
            <div className="tryCourses">
                <a href="#" className="tryBtn">TRY THESE FREE COURSES!</a>
            </div>
        </div>
    );
};

export default Home;
