import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';
import { logoutVol } from '../../actions/auth_vol';
import { getVolList } from '../../actions/get_vol_list';
import { getHelpeeList } from '../../actions/get_helpee_list';

const Navbar = ({ auth: { isAuthenticated, loading }, auth_vol, logout, logoutVol, getHelpeeList }) => {

    const authLinks = (

        <ul>
            <li>
                <Link to='/helpee_dashboard'></Link>
                <i className='fas fa-user' /> { }
                <span className='hide-sm'>Edit Profile</span>
            </li>
            <li>
                <a onClick={logout} href='#!'>
                    <i className='fas fa-sign-out-alt' /> { }
                    <span className='hide-sm'>Logout</span>
                </a>
            </li>
        </ul>
    );
    const authLinks_vol = (

        <ul>
            <li>
                <Link to='/vol_dashboard'></Link>
                <i className='fas fa-user' /> { }
                <span className='hide-sm'>Edit Profile</span>
            </li>
            <li>
                <a onClick={getHelpeeList} href='#!'>
                <i className='fas fa-user' /> { }
                <span className='hide-sm'>Get Helpee List</span>
                </a>
            </li>
            <li>
                <a onClick={logoutVol} href='#!'>
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
                //<Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
                <Fragment>{isAuthenticated ? authLinks : (auth_vol.isAuthenticated ? authLinks_vol : guestLinks)}</Fragment>
            )}

        </nav>
    )
};

Navbar.propTypes = {
    logout: PropTypes.func.isRequired,
    logoutVol: PropTypes.func.isRequired,
    getHelpeeList: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    auth_vol: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    auth: state.auth,
    auth_vol: state.auth_vol
});

export default connect(mapStateToProps, { logout, logoutVol, getHelpeeList })(Navbar);
