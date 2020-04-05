import React, { Fragment, useEffect } from 'react';
import Landing from './components/layout/Landing';
import Navbar from './components/layout/Navbar';
import Login_Helpee from './components/auth/Login_Helpee';
import Register_Helpee from './components/auth/Register_Helpee';
import Login_Volunteer from './components/auth/Login_Volunteer';
import Register_Volunteer from './components/auth/Register_Volunteer';
import { About_Us } from './components/misc/About_Us';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//Redux
import { Provider }  from 'react-redux';
import store  from './store';
import Alert from './components/layout/Alert';
import setAuthToken from './utils/setAuthToken';
import { loadUser } from './actions/auth';
import HelpeeDashboard from './components/dashboards/HelpeeDashboard';
import VolDashboard from './components/dashboards/VolDashboard';
import PrivateRoute from './components/routing/PrivateRoute';
import VolPrivateRoute from './components/routing/VolPrivateRoute';
import CreateHelpeeProfile from './components/profile-form/CreateHelpeeProfile';
import CreateVolProfile from './components/profile-form/CreateVolProfile';
import EditVolProfile from './components/profile-form/EditVolProfile';

import './App.css';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {

  useEffect(() => {
    setAuthToken(localStorage.token);
    store.dispatch(loadUser());
  }, []);

  
  return (
  <Provider store={store}>
    <Router>
      <Fragment>
        <Navbar />
        <Route exact path="/" component={Landing} />
        <section className="container">
          <Alert />
          <Switch>
            <Route exact path="/register_helpee" component={Register_Helpee}></Route>
            <Route exact path="/register_volunteer" component={Register_Volunteer}></Route>
            <Route exact path="/login_helpee" component={Login_Helpee}></Route>
            <Route exact path="/login_volunteer" component={Login_Volunteer}></Route>
            <Route exact path="/about_us" component={About_Us}></Route>
            <PrivateRoute exact path="/helpee_dashboard" component={HelpeeDashboard}></PrivateRoute>
            <PrivateRoute exact path="/create_helpee_profile" component={CreateHelpeeProfile}></PrivateRoute>
            <VolPrivateRoute exact path="/vol_dashboard" component={VolDashboard}></VolPrivateRoute>
            <VolPrivateRoute exact path="/create_vol_profile" component={CreateVolProfile}></VolPrivateRoute>
            <VolPrivateRoute exact path="/edit_vol_profile" component={EditVolProfile}></VolPrivateRoute>
          </Switch>
        </section>
      </Fragment>
    </Router>
  </Provider>
  );
};

export default App;
