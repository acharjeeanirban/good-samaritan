import React, { useState, Fragment, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import { acceptHelpee } from '../../actions/accept_helpee';
import { getCurrentVolProfile } from '../../actions/vol_profile';
import { getHelpeeList } from '../../actions/get_helpee_list';
import { connect } from 'react-redux';

//const HelpeeListInVolDashboard = (props) => {
const HelpeeListInVolDashboard = ({ acceptHelpee, getHelpeeList, getCurrentVolProfile, profile : { profiles, loading } }) => {

    useEffect(() => {
        getCurrentVolProfile();
        getHelpeeList();
    }, []);
    
    return (
        <Fragment>
            New List of people who need help  : {
                profiles && profiles.length !==0 ? (
                    profiles.map(prof => {
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
                            <div className="buttons">
                                
                                <button type="button" onClick={e => {acceptHelpee(prof._id)}} className="btn btn-primary">Accept</button>
                            </div>
                        </div>
                    )
                    }) 
                ) : null }
        </Fragment>
    )
}

// HelpeeListInVolDashboard.propTypes = {
//     //getCurrentVolProfile: PropTypes.func.isRequired,
//     auth: PropTypes.object.isRequired,
//     profile: PropTypes.object.isRequired
// };

const mapStateToProps = state => ({
    //auth: state.auth_vol,
    profile: state.vol_profile,
});

HelpeeListInVolDashboard.propTypes = {
    acceptHelpee: PropTypes.func.isRequired,
    //auth: PropTypes.object.isRequired,
    getHelpeeList: PropTypes.func.isRequired,
    getCurrentVolProfile: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired
};

export default connect(mapStateToProps, { acceptHelpee, getHelpeeList, getCurrentVolProfile })(HelpeeListInVolDashboard);
