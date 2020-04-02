import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

const HelpeeListInVolDashboard = (props) => {

    const onClickAccept = e => {
        e.preventDefault();
        alert('onClickAccept ' + props.eachHelpee.bio);

    }

    const onClickReject = e => {
        e.preventDefault();
        alert('onClickReject ' + props.eachHelpee.bio);

    }
    return (
        <div className="container">
            Name : {props.eachHelpee.name} <br/>
            Email : {props.eachHelpee.email} <br/>
            Bio : {props.eachHelpee.bio} <br/>
            Need help with : {props.eachHelpee.help_needed_with} <br/>
            Age : {props.eachHelpee.age} <br/>
            City : {props.eachHelpee.city} <br/>
            <div className="buttons">
                        <button type="button" onClick={e => onClickAccept(e)} className="btn btn-primary">Accept</button>
                        <button type="button" onClick={e => onClickReject(e)} className="btn btn-primary">Reject</button>
            </div>
        </div>
    )
}

// HelpeeListInVolDashboard.propTypes = {
//     //getCurrentVolProfile: PropTypes.func.isRequired,
//     auth: PropTypes.object.isRequired,
//     profile: PropTypes.object.isRequired
// };

// const mapStateToProps = state => ({
//     auth: state.auth_vol,
//     profile: state.vol_profile,
// });

export default HelpeeListInVolDashboard;
