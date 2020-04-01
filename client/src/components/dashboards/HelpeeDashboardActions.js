import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

const HelpeeDashboardActions = () => {
    return (
        <div className="dash-buttons">
        <Link to="edit_helpee_profile" className="btn btn-light"
          ><i className="fas fa-user-circle text-primary"></i> Edit Profile
        </Link>
        </div>

        // <ul>
        //     <li>
        //         <Link to='/edit_helpee_profile' className="btn btn-light"></Link>
        //         <i className="fas fa-user-circle text-primary"></i> { } Edit Profile
                
        //     </li>
        //     <li>
        //     <Link to='/edit_helpee_profile' className="btn btn-light"></Link>
        //         <i className="fas fa-user-circle text-primary"></i> { } Edit Profile
        //     </li>
        // </ul>
    )
}

export default HelpeeDashboardActions;
