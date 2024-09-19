import React from 'react';
import About from './About';
import Interests from './Interests';

export default function Main() {
    return (
        <main className="main">
            <section className="info">
                <div className="info-profile-pic">
                    <img src="/images/profile.jpg" alt="Alex Coala" />
                </div>
                <div className="info-basic-info">
                    <h1 className="name">Alex Coala</h1>
                    <h3 className="title">Backend Developer</h3>
                    <p className="website">
                        <a href="https://github.com/Snoke19">github.com/Snoke19</a>
                    </p>
                </div>
                <div className="info-action">
                    <button className="email-btn">
                        <img src="/images/email-icon.png" alt="Email icon" />Email
                    </button>
                    <button className="linkedin-btn">
                        <img src="/images/linkedin-icon.png" alt="LinkedIn icon" />LinkedIn
                    </button>
                </div>
            </section>
            <div className="scroll-info">
                <About />
                <Interests />
            </div>
        </main>
    );
}