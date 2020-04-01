import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';
//import { getVolList } from '../../actions/auth';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {

    const authLinks = (

        <ul>
            <li>
                <Link to='/helpee_dashboard'></Link>
                <i className='fas fa-user' /> { }
                <span className='hide-sm'>Edit Profile</span>
            </li>
            <li>
                <a onClick={logout} href='#!'>
                <i className='fas fa-user' /> { }
                <span className='hide-sm'>Get Helpee List</span>
                </a>
            </li>
            <li>
                <a onClick={logout} href='#!'>
                    <i className='fas fa-sign-out-alt' /> { }
                    <span className='hide-sm'>Logout</span>
                </a>
            </li>
        </ul>
    );

    const guestLinks = (
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
    );


    return (
        <nav className="navbar bg-dark">
            <h1>
                <Link to="/"><i className="fas fa-code"></i> Good Samaritan</Link>
                
            </h1>

            {!loading && (
                <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
            )}

        </nav>
    )
};

Navbar.propTypes = {
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
	auth: state.auth
});

export default connect(mapStateToProps, { logout })(Navbar);
