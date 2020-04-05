import React from 'react'
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Landing = ({ isAuthenticated_helpee, isAuthenticated_vol }) => {

    if (isAuthenticated_helpee) {
        return <Redirect to='/helpee_dashboard' />
    } else if (isAuthenticated_vol) {
        return <Redirect to='/vol_dashboard' />
    }
     return (
        <section className="landing">
            <div className="dark-overlay">
                <div className="landing-inner">
                    <h1 className="x-large">Your cool samaritan</h1>
                    <p className="lead">
                        In this time of crisis, i.e COVID-19, 
                        members of our society can feel very vulnerable. Our elderly are most at risk. 
                        This website serves as a platform for the elderly to register for help and for able 
                        and healthy people in our society to come forward to help the vulnerable.
                    </p>
                    <div className="buttons">
                        <Link to="/register_helpee" className="btn btn-primary">Sign Up as someone who needs help</Link>
                        <Link to="/register_volunteer" className="btn btn-primary">Sign Up as a Volunteer</Link>
                    </div>
                </div>
            </div>
        </section>
    )
};
Landing.propTypes = {
    isAuthenticated_vol: PropTypes.bool,
    isAuthenticated_helpee: PropTypes.bool
}
const mapStateToProps = state => ({
    isAuthenticated_vol: state.auth_vol.isAuthenticated,
    isAuthenticated_helpee: state.auth.isAuthenticated,
})

export default connect(mapStateToProps)(Landing);
