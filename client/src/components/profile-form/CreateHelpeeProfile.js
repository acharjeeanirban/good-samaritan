import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const CreateHelpeeProfile = props => {
    const [formData, setFormData] = useState({

        bio: '',
        age: '',
        phone: '',
        emergency_contact: '',
        emergency_contact_num: '',
        help_needed_with: ''
    });

    const {

        bio,
        age,
        phone,
        emergency_contact,
        emergency_contact_num,
        help_needed_with

    } = formData;

    return (
        <Fragment>
            <h1 className="large text-primary">
                Create Your Profile
            </h1>
            <p className="lead">
                <i className="fas fa-user"></i> Let's get some information about you.
            </p>
            <small>* = required field</small>
            <form className="form">
                <div className="form-group">
                    <input type="text" placeholder="Bio" name="bio" required/>
                    <small className="form-text">* Say something about yourself.</small>
                </div>
                <div className="form-group">
                    <input type="text" placeholder="Age" name="age" />
                    <small className="form-text">Age</small>
                </div>
                <div className="form-group">
                    <input type="text" placeholder="Phone" name="phone" />
                    <small className="form-text">Phone</small>
                </div>
                <div className="form-group">
                    <input type="text" placeholder="Emergency Contact" name="emergency_contact" />
                    <small className="form-text">Emergency Contact</small>
                </div>
                <div className="form-group">
                    <input type="text" placeholder="Emergency Contact Number" name="emergency_contact_num" />
                    <small className="form-text">Emergency Contact Number</small>
                </div>
                <div className="form-group">
                    <select name="status">
                        <option value="0">* What do you need help with</option>
                        <option value="Groceries">Groceries</option>
                        <option value="Pick up medicine">Pick up medicine</option>
                        <option value="Walk my dog">Walk my dog</option>
                        <option value="Just need to talk">Just need to talk</option>
                        <option value="Other">Other</option>
                    </select>
                    <small className="form-text">Give us an idea of what you need help with</small>
                </div>
                <input type="submit" className="btn btn-primary my-1" />
                <a className="btn btn-light my-1" href="dashboard.html">Go Back</a>
            </form>
        </Fragment>
    )
}

CreateHelpeeProfile.propTypes = {

}

export default CreateHelpeeProfile
