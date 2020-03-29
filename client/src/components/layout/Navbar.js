import React from 'react'

export const Navbar = () => {
    return (
        <nav className="navbar bg-dark">
            <h1>
                <a href="index.html"><i className="fas fa-code"></i> Good Samaritan</a>
            </h1>
            <ul>
                <li><a href="login.html">Login</a></li>
                <li><a href="login.html">Volunteer Login </a></li>
            </ul>
        </nav>
    )
}
