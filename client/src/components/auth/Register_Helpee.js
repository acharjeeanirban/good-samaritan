import React, { Fragment, useState } from "react";
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import PropTypes from 'prop-types';


const Register_Helpee = ({ setAlert, register, isAuthenticated }) => {

	const [formData, setFormData] = useState({
		name: '',
		email: '',
		password: '',
		password2: ''
	});
	
	const { name, email, password,password2 } = formData;

	const onChange = e =>
	setFormData({ ...formData, [e.target.name]: e.target.value });
	
	const onSubmit = async e => {

		e.preventDefault();

		if (password !== password2) {
			setAlert('Passwords do not match', 'danger', 2000);
		} else {
			register({ name, email, password, password2 })
		}

	}

	//Redirect if logged in
	if (isAuthenticated) {
		return <Redirect to='/helpee_dashboard' />
	}

	return (
		<Fragment>
			<h1 className="large text-primary">Sign Up</h1>
			<p className="lead">
				<i className="fas fa-user"></i> Create Your Account, please don't reuse any of your other websites password here.
			</p>
			<form className="form" onSubmit={e => onSubmit(e)}>
				<div className="form-group">
					<input type="text" placeholder="Name" name="name" 
						value={name}
						onChange={e => onChange(e)}
						required />
				</div>
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
						minLength="6"
						value={password}
						onChange={e => onChange(e)}
						required
					/>
				</div>
				<div className='form-group'>
					<input
						type='password'
						placeholder='Confirm Password'
						name='password2'
						value={password2}
						onChange={e => onChange(e)}
					/>
        		</div>
				<input type="submit" className="btn btn-primary" value="Register" />
			</form>
			<p className="my-1">
				Already have an account? <Link to="/login_helpee">Sign in</Link>
			</p>
		</Fragment>
	);
};

Register_Helpee.propTypes = {
	setAlert: PropTypes.func.isRequired,
	register: PropTypes.func.isRequired,
	isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
	isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { setAlert, register })(Register_Helpee);
