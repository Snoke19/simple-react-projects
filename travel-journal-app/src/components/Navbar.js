import React from "react";

export default function Navbar() {
    return (
        <nav className="navbar">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 25 25" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="nav-logo icon icon-tabler icons-tabler-outline icon-tabler-world">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                <path d="M3.6 9h16.8" />
                <path d="M3.6 15h16.8" />
                <path d="M11.5 3a17 17 0 0 0 0 18" />
                <path d="M12.5 3a17 17 0 0 1 0 18" />
            </svg>
            <h1 className="nav-title">my travel journal.</h1>
        </nav>
    );
}