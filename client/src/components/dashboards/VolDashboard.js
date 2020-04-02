import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentVolProfile } from '../../actions/vol_profile';
import Spinner from '../layout/Spinner';
import { Link } from 'react-router-dom';
 
import HelpeeListInVolDashboard from './HelpeeListInVolDashboard';

const VolDashboard = ({ getCurrentVolProfile, auth: { user }, profile: { profile, loading, profiles } }) => {

    useEffect(() => {
        getCurrentVolProfile();
    }, []);

    return loading && profile === null ? <Spinner /> : <Fragment>
        
        <h1 className='large text-primary'>Dashboard</h1>
        <p className='lead'>
            <i className='fas fa-user'></i> Welcome { user && user.name }
        </p>
        { profile !== null ? 
            (<Fragment>

            List of people who need help  : {
                profiles && profiles.length !==0 ? (
                    profiles.map(prof => {
                        return (<HelpeeListInVolDashboard key={prof._id} eachHelpee={prof}/>)
                        //return (<li key={prof._id}>{prof.bio}</li>);
                    }) 
                ) : null }

                
            </Fragment>)  : 
            <Fragment>

                <p>You have not set up a profile, please add some info.</p>

                <Link to='/create_vol_profile' className='btn btn-primary my-1'>
                    Create Profile
                </Link>
            
            </Fragment>}
        
        </Fragment>
}

VolDashboard.propTypes = {
    getCurrentVolProfile: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth_vol,
    profile: state.vol_profile,
});

export default connect(mapStateToProps , { getCurrentVolProfile })(VolDashboard)
