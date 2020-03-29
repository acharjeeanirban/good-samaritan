import React, { Fragment } from "react";

export const Register_Helpee = () => {
	return (
		<Fragment>
			<h1 class="large text-primary">Sign Up</h1>
			<p class="lead">
				<i class="fas fa-user"></i> Create Your Account
			</p>
			<form class="form" action="create-profile.html">
				<div class="form-group">
					<input type="text" placeholder="Name" name="name" required />
				</div>
				<div class="form-group">
					<input type="email" placeholder="Email Address" name="email" />
				</div>
				<div class="form-group">
					<input
						type="password"
						placeholder="Password"
						name="password"
						minLength="6"
					/>
				</div>
				<div class="form-group">
					<input type="text" placeholder="Country" name="country" />
				</div>
				<div class="form-group">
					<input type="text" placeholder="Province/State" name="province" />
				</div>
				<div class="form-group">
					<input type="text" placeholder="City" name="city" />
				</div>
                <div class="form-group">
					<input type="text" placeholder="Zipcode" name="zipcode" />
				</div>

				<input type="submit" class="btn btn-primary" value="Register" />
			</form>
			<p class="my-1">
				Already have an account? <a href="login.html">Sign In</a>
			</p>
		</Fragment>
	);
};
