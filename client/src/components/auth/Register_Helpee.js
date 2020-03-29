import React, { Fragment, useState } from "react";
import axios from 'axios';

export const Register_Helpee = () => {

	const [formData, setFormData] = useState({
		name: '',
		email: '',
		password: '',
		country: '',
		province: '',
		city: '',
		zipcode: ''
	});
	
	const { name, email, password, country, province, city, zipcode } = formData;

	const onChange = e =>
	setFormData({ ...formData, [e.target.name]: e.target.value });
	
	const onSubmit = async e => {

		e.preventDefault();
		
		// const newUser = {
		// 	name,
		// 	email,
		// 	password,
		// 	country,
		// 	province,
		// 	city,
		// 	zipcode
		// };

		// try {
			
		// 	const config = {
		// 		headers: {
		// 			'Content-type': 'application/json'
		// 		}
		// 	}

		// 	const body = JSON.stringify(newUser);

		// 	const res = await axios.post('/api/help_users/register', body, config);

		// 	// this is the token
		// 	console.log(res.data);

		// } catch(err) {
		// 	console.error(err.response.data);

		// }
		//console.log(email);

	}

	return (
		<Fragment>
			<h1 className="large text-primary">Sign Up</h1>
			<p className="lead">
				<i className="fas fa-user"></i> Create Your Account
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
				<div className="form-group">
					<input type="text" placeholder="Country" name="country" 
						value={country}
						onChange={e => onChange(e)}
						required/>
				</div>
				<div className="form-group">
					<input type="text" placeholder="Province/State" name="province" 
						value={province}
						onChange={e => onChange(e)}
						required/>
				</div>
				<div className="form-group">
					<input type="text" placeholder="City" name="city" 
						value={city}
						onChange={e => onChange(e)}
						required/>
				</div>
                <div className="form-group">
					<input type="text" placeholder="Zipcode" name="zipcode" 
						value={zipcode}
						onChange={e => onChange(e)}
						required/>
				</div>

				<input type="submit" className="btn btn-primary" value="Register" />
			</form>
			<p className="my-1">
				Already have an account? <a href="login.html">Sign In</a>
			</p>
		</Fragment>
	);
};
