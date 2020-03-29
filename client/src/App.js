import React, { Fragment } from 'react';
import { Landing } from './components/layout/Landing';
import { Navbar } from './components/layout/Navbar';
import { Login_Helpee } from './components/auth/Login_Helpee';
import { Register_Helpee } from './components/auth/Register_Helpee';
import { Login_Volunteer } from './components/auth/Login_Volunteer';
import { Register_Volunteer } from './components/auth/Register_Volunteer';
import { About_Us } from './components/misc/About_Us';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//Redux
import { Provider }  from 'react-redux';
import store  from './store';
import './App.css';

const App = () => 
  <Provider store={store}>
    <Router>
      <Fragment>
        <Navbar />
        <Route exact path="/" component={Landing} />
        <section className="container">
          <Switch>
            <Route exact path="/register_helpee" component={Register_Helpee}></Route>
            <Route exact path="/register_volunteer" component={Register_Volunteer}></Route>
            <Route exact path="/login_helpee" component={Login_Helpee}></Route>
            <Route exact path="/login_volunteer" component={Login_Volunteer}></Route>
            <Route exact path="/about_us" component={About_Us}></Route>
          </Switch>
        </section>
      </Fragment>
    </Router>
  </Provider>

export default App;
