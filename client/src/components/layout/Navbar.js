import React from 'react'
import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
        <nav className="navbar bg-dark">
            <h1>
                <a href="index.html"><i className="fas fa-code"></i> Good Samaritan</a>
            </h1>
            <ul>
                <li>
                    <Link to="/login_helpee">Login</Link>
                </li>
                <li>
                    <Link to="/login_volunteer">Volunteer Login</Link>
                </li>
                <li>
                    <Link to="/about_us">About Us</Link>
                </li>
            </ul>
        </nav>
    )
}
