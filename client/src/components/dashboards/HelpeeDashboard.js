import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../../actions/helpee_profile';
import Spinner from '../layout/Spinner';
import { Link } from 'react-router-dom';
//import HelpeeDashboardActions from './HelpeeDashboardActions';

const HelpeeDashboard = ({ getCurrentProfile, auth: { user }, profile: { profile, loading } }) => {

    useEffect(() => {
        getCurrentProfile();
    }, []);

    return loading && profile === null ? <Spinner /> : <Fragment>
        
        <h1 className='large text-primary'>Dashboard</h1>
        <p className='lead'>
            <i className='fas fa-user'></i> Welcome { user && user.name }
        </p>
        { profile !== null ? 
            (<Fragment> 
                
                
                
            </Fragment> 
                
                )  : 
            <Fragment>

                <p>You have not set up a profile, please add some info.</p>

                <Link to='/create_helpee_profile' className='btn btn-primary my-1'>
                    Create Profile
                </Link>
            
            </Fragment>}
        
        </Fragment>
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
