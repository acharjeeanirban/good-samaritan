import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../../actions/helpee_profile';
import Spinner from '../layout/Spinner';

const HelpeeDashboard = ({ getCurrentProfile, auth, profile: { profile, loading } }) => {

    useEffect(() => {
        getCurrentProfile();
    }, []);

    return loading && profile === null ? <Spinner /> : <Fragment>bazinga - {profile.user}</Fragment>
}

HelpeeDashboard.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    profile: state.helpee_profile
});

export default connect(mapStateToProps , { getCurrentProfile })(HelpeeDashboard)
