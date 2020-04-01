import React, { Fragment, useState } from "react";
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loginVol } from '../../actions/auth_vol';

const Login_Volunteer = ({ loginVol, isAuthenticated }) => {

	const [formData, setFormData] = useState({

		email: '',
		password: ''

	});
	
	const { email, password } = formData;

	const onChange = e =>
	setFormData({ ...formData, [e.target.name]: e.target.value });
	
	const onSubmit = async e => {
		e.preventDefault();
		loginVol(email, password);
	};

	//Redirect if logged in
	if (isAuthenticated) {
		console.log('TTTTTTTTTTTTTTTTT');
		//return <Fragment>sjdhgfjshgkhdfkgj</Fragment>
		return <Redirect to='/vol_dashboard' />
	}

	return (
		<Fragment>
			<h1 className="large text-primary">Login</h1>
			<p className="lead">
				<i className="fas fa-user"></i> Login into your account
			</p>
			<form className="form" onSubmit={e => onSubmit(e)}>
				<div className="form-group">
					<input type="email" placeholder="Email Address" name="email"
						value={email}
						onChange={e => onChange(e)} required />
				</div>
				<div className="form-group">
					<input
						type="password"
						placeholder="Password"
						name="password"
						value={password}
						onChange={e => onChange(e)}
						required
					/>
				</div>

				<input type="submit" className="btn btn-primary" value="Login" />
			</form>
			<p className="my-1">
				Don't have an account? <Link to="/register_vol">Register</Link>
			</p>
		</Fragment>
	);
};

Login_Volunteer.propTypes = {
	loginVol: PropTypes.func.isRequired,
	isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => ({
	isAuthenticated: state.auth_vol.isAuthenticated
});

export default connect(mapStateToProps, { loginVol })(Login_Volunteer);
