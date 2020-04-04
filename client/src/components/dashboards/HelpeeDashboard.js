import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../../actions/helpee_profile';
import Spinner from '../layout/Spinner';
import { Link } from 'react-router-dom';
//import HelpeeDashboardActions from './HelpeeDashboardActions';

const HelpeeDashboard = ({ getCurrentProfile, auth: { user }, profile: { profile, loading, profiles } }) => {

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
                
                Hi there! Check the below list to see if you have been matched up with a volunteer. 
                If not, hang tight, you will be matched with agood samaritan soon! <br />

                {
                //TDOD: change this to a list of vols
                profiles && profiles.length !==0 ? (
                    //(<h4>List of People who are helping you : </h4>)
                    profiles.map(prof => {
                        //return (<HelpeeListInVolDashboard key={prof._id} eachHelpee={prof} />)
                        //return (<HelpeeListInVolDashboard key={prof._id} />)
                        //return (<li key={prof._id}>{prof.bio}</li>);

                        return (<div className="container" key={prof._id}> 
                            Name : {prof.name} <br/>
                            Email : {prof.email} <br/>
                            Bio : {prof.bio} <br/>
                            Age : {prof.age} <br/>
                            City : {prof.city} <br/>
                        </div>
                       )
                    }) 
                ) : null }

                
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
