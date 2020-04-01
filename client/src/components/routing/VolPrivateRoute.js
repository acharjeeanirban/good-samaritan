import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


const VolPrivateRoute = ({ component: Component, auth : { isAuthenticated, loading }, ...rest}) => (

    //console.log("in private VolPrivateRoute")
    
    <Route {...rest} render={props => !isAuthenticated && !loading ? (<Redirect to='/login_volunteer' />) : (<Component {...props} />)} />
)

VolPrivateRoute.propTypes = {
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth_vol
});

export default connect(mapStateToProps)(VolPrivateRoute)