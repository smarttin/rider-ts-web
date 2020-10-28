import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';

import Login from '../../router/Login';
import PhoneLogin from '../../router/PhoneLogin';
import VerifyPhone from '../../router/VerifyPhone';
import SocialLogin from '../../router/SocialLogin';
import Home from '../../router/Home';
import Ride from '../../router/Ride';
import Chat from '../../router/Chat';
import EditAccount from '../../router/EditAccount';
import Settings from '../../router/Settings';
import Places from '../../router/Places';
import AddPlace from '../../router/AddPlace';
import FindAddress from '../../router/FindAddress';

interface IProps {
  isLoggedIn: boolean;
}

const LoggedOutRoutes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Login} />
    <Route path="/phone-login" component={PhoneLogin} />
    <Route path="/verify-phone" component={VerifyPhone} />
    <Route path="/social-login" component={SocialLogin} />
    <Redirect from="*" to="/" />
  </Switch>
);

const LoggedInRoutes: React.FC = () => (
  <Switch>
    <Route path="" exact component={Home} />
    <Route path="/ride/:rideId" exact component={Ride} />
    <Route path="/chat/:chatId" exact component={Chat} />
    <Route path="/edit-account" exact component={EditAccount} />
    <Route path="/settings" exact component={Settings} />
    <Route path="/places" exact component={Places} />
    <Route path="/add-place" exact component={AddPlace} />
    <Route path="/find-address" exact component={FindAddress} />
    <Redirect from="*" to="/" />
  </Switch>
);

const AppPresenter: React.FC<IProps> = ({isLoggedIn}) => (
  <Router>{isLoggedIn ? <LoggedInRoutes /> : <LoggedOutRoutes />}</Router>
);

AppPresenter.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};

export default AppPresenter;
