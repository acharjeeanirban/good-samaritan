import React, { useState, Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createVolProfile } from '../../actions/vol_profile';

// TODO: fix auto populate country/state/city

import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';

const CreateVolProfile = ({ createVolProfile, history }) => {
    const [formData, setFormData] = useState({

        bio: '',
        age: '',
        phone: '',
        country: '',
        province: '',
        city: '',
        zipcode: ''
    });

    const {

        bio,
        age,
        phone,
        country,
        province,
        city,
        zipcode

    } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        createVolProfile(formData, history);
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
                    <input type="text" placeholder="Country" name="country" value={country} onChange={e => onChange(e)}/>
                    <small className="form-text">Country</small>
                </div>
                <div className="form-group">
                    <input type="text" placeholder="Province/State" name="province" required value={province} onChange={e => onChange(e)}/>
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

            </form>
        </Fragment>
    )
}

CreateVolProfile.propTypes = {
    createVolProfile: PropTypes.func.isRequired
}

// const mapStateToProps = state => ({

// });
export default connect(null, { createVolProfile })(withRouter(CreateVolProfile))
