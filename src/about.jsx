import React from "react";
import resumePDF from "/Users/fatimahrana/Desktop/school/CC_sem3/COMP229-002-F24/assignment01/client/public/resume.pdf";

export default function About() {
    return (
        <>
            <h1 id="jobtitle">Junior Software Developer</h1>
            <h2 id="name">Fatimah Mohammed Rana</h2>
            <a href={resumePDF} target="_blank" rel="noreferrer">
                <h3 id="resume">download resume</h3>
            </a>
            <br></br>
            <div className="image-container">
                <img id="portrait" src="/public/portrait.jpg" alt="portrait" className="portrait"/>
            </div>
            <div className="about-me">
                <p id="paragraph">I am a dedicated student at Centennial College enrolled in a co-op program for software engineering. With a passion for technology and innovation, I aspire to excel in fields such as full stack development, front-end, back-end, UX/UI, and other engineering prospects. I value education and I am committed to creating new experiences that push the boundaries of whats possible. My goal is to leverage my skills and knowledge to make a meaningful impact in the tech industry. </p>
            </div>
        </>
    );
}
