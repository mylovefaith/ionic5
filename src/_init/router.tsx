import React from 'react';
import { connect } from 'react-redux';
import { IonRouterOutlet, IonSplitPane } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';

import { Menu } from '../components';
import { ROUTES } from '../business/enums';
import { authAction } from '../business/actions';
import { HomeScreen, GroupScreen } from '../screens';
import LoginScreen from '../screens/loginScreen';
import PrivateRoute from './privateRoute';

interface RouterProps {
  isLoggedIn: boolean;
  currentRoute: string;
  onLogout: Function;
}

const Router: React.FC<RouterProps> = ({ isLoggedIn, currentRoute, onLogout }) => {
  return (
    <IonReactRouter>
      {isLoggedIn && (
        <IonSplitPane contentId="main">
          <Menu currentRoute={currentRoute} onLogout={onLogout} />
          <IonRouterOutlet id="main">
            <PrivateRoute path={ROUTES.HOME} component={HomeScreen} exact={true} isLoggedIn={isLoggedIn} />
            <PrivateRoute path={ROUTES.GROUP} component={GroupScreen} exact={true} isLoggedIn={isLoggedIn} />
            <Route path="/" render={() => <Redirect to={ROUTES.HOME} />} />
          </IonRouterOutlet>
        </IonSplitPane>
      )}

      <Route path={ROUTES.LOGIN} component={LoginScreen} exact={true} />
      {!isLoggedIn && <Route path="/" render={() => <Redirect to={ROUTES.LOGIN} />} />}
    </IonReactRouter>
  );
};

const mapStateToProps = state => ({
  isLoggedIn: state.global.localStorage.authToken !== null,
  currentRoute: state.routing.currentRoute,
});

const mapDispatchToProps = {
  onLogout: authAction.logout,
};

const connected = connect(mapStateToProps, mapDispatchToProps);

export default connected(Router);
