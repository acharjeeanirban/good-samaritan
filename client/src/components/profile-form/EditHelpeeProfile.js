import React, { useState, Fragment, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProfile, getCurrentProfile } from '../../actions/helpee_profile';

const EditHelpeeProfile = ({ profile : { profile, loading } , createProfile, getCurrentProfile, history }) => {
    
    const [formData, setFormData] = useState({

        bio: '',
        age: '',
        phone: '',
        country: '',
        province: '',
        city: '',
        zipcode: '',
        emergency_contact: '',
        emergency_contact_num: '',
        help_needed_with: ''
    });

    useEffect(() => {
        getCurrentProfile();

        setFormData({
            bio: loading || !profile.bio ?  '' : profile.bio,
            age: loading || !profile.age ?  '' : profile.age,
            phone: loading || !profile.phone ?  '' : profile.phone,
            country: loading || !profile.country ?  '' : profile.country,
            province: loading || !profile.province ?  '' : profile.province,
            city: loading || !profile.city ?  '' : profile.city,
            zipcode: loading || !profile.zipcode ?  '' : profile.zipcode,
            emergency_contact: loading || !profile.emergency_contact ?  '' : profile.emergency_contact,
            emergency_contact_num: loading || !profile.emergency_contact_num ?  '' : profile.emergency_contact_num,
            help_needed_with: loading || !profile.help_needed_with ?  '' : profile.help_needed_with,

            
        });
    }, [loading]);

    const {

        bio,
        age,
        phone,
        country,
        province,
        city,
        zipcode,
        emergency_contact,
        emergency_contact_num,
        help_needed_with

    } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        createProfile(formData, history);
    }

    return (
        <Fragment>
            <h1 className="large text-primary">
                Create Your Profile
            </h1>
            <p className="lead">
                <i className="fas fa-user"></i> Let's get some information about you.
            </p>
            <small>* = required field</small>
            <form className="form" onSubmit={e => onSubmit(e)}>
                <div className="form-group">
                    <input type="text" placeholder="Bio" name="bio" required value={bio} onChange={e => onChange(e)}/>
                    <small className="form-text">* Say something about yourself.</small>
                </div>
                <div className="form-group">
                    <input type="text" placeholder="Age" name="age" value={age} onChange={e => onChange(e)}/>
                    <small className="form-text">Age</small>
                </div>
                <div className="form-group">
                    <input type="text" placeholder="Phone" name="phone" value={phone} onChange={e => onChange(e)}/>
                    <small className="form-text">Phone</small>
                </div>
                <div className="form-group">
                    <input type="text" placeholder="Country" name="country" required value={country} onChange={e => onChange(e)}/>
                    <small className="form-text">Country</small>
                </div>
                <div className="form-group">
                    <input type="text" placeholder="Province/State" name="province" required requiredvalue={province} onChange={e => onChange(e)}/>
                    <small className="form-text">Province</small>
                </div>
                <div className="form-group">
                    <input type="text" placeholder="City" name="city" required value={city} onChange={e => onChange(e)}/>
                    <small className="form-text">City</small>
                </div>
                <div className="form-group">
                    <input type="text" placeholder="Zipcode" name="zipcode" required value={zipcode} onChange={e => onChange(e)}/>
                    <small className="form-text">Zipcode</small>
                </div>
                <div className="form-group">
                    <input type="text" placeholder="Emergency Contact" name="emergency_contact" value={emergency_contact} onChange={e => onChange(e)}/>
                    <small className="form-text">Emergency Contact</small>
                </div>
                <div className="form-group">
                    <input type="text" placeholder="Emergency Contact Number" name="emergency_contact_num" value={emergency_contact_num} onChange={e => onChange(e)}/>
                    <small className="form-text">Emergency Contact Number</small>
                </div>
                <div className="form-group">
                    <select name='help_needed_with' value={help_needed_with} onChange={e => onChange(e)}>
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
            </form>
        </Fragment>
    )
}

EditHelpeeProfile.propTypes = {
    createProfile: PropTypes.func.isRequired,
    getCurrentProfile: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired
}
const mapStateToProps = state => ({
    profile: state.helpee_profile
});
export default connect(mapStateToProps, { createProfile, getCurrentProfile })(withRouter(EditHelpeeProfile))
