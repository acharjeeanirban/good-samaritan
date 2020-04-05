import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentVolProfile } from '../../actions/vol_profile';
import Spinner from '../layout/Spinner';
import { Link } from 'react-router-dom';

import { acceptHelpee } from '../../actions/accept_helpee';
 
import HelpeeListInVolDashboard from './HelpeeListInVolDashboard';

const VolDashboard = ({ getCurrentVolProfile, acceptHelpee, auth: { user }, profile: { profile, loading, profiles, my_accepted_list } }) => {

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

            List of people who your are already helping  : {
                my_accepted_list && my_accepted_list.length !==0 ? (
                    my_accepted_list.map(prof => {
                        //return (<HelpeeListInVolDashboard key={prof._id} eachHelpee={prof} />)
                        //return (<HelpeeListInVolDashboard key={prof._id} />)
                        //return (<li key={prof._id}>{prof.bio}</li>);

                        return (<div className="container" key={prof._id}> 
                            Name : {prof.name} <br/>
                            Email : {prof.email} <br/>
                            Bio : {prof.bio} <br/>
                            Need help with : {prof.help_needed_with} <br/>
                            Age : {prof.age} <br/>
                            City : {prof.city} <br/>
                            {/* <div className="buttons">
                                
                                <button type="button" onClick={e => {acceptHelpee(prof._id)}} className="btn btn-primary">Accept</button>
                            </div> */}
                        </div>
                       )
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
    acceptHelpee: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth_vol,
    profile: state.vol_profile,
});

export default connect(mapStateToProps , { getCurrentVolProfile, acceptHelpee })(VolDashboard)
