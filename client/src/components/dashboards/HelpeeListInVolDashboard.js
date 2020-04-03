import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import { acceptHelpee } from '../../actions/accept_helpee';
import { connect } from 'react-redux';

const HelpeeListInVolDashboard = (props) => {
//const HelpeeListInVolDashboard = ({ acceptHelpee, auth: { user }, profile: { profile, loading, profiles } }) => {

    const onClickAccept = e => {
        e.preventDefault();
        alert('onClickAccept ' + props.eachHelpee._id);
        console.log('BAZINGAAA in HelpeeListInVolDashboard : ' + props.eachHelpee._id);
        acceptHelpee(props.eachHelpee._id);

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
                <button type="button" onClick={acceptHelpee(props.eachHelpee._id)} className="btn btn-primary">Accept</button>
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

HelpeeListInVolDashboard.propTypes = {
    acceptHelpee: PropTypes.func.isRequired,
    //auth: PropTypes.object.isRequired,
    //profile: PropTypes.object.isRequired
};

export default connect(null, { acceptHelpee })(HelpeeListInVolDashboard);
