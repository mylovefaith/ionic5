import React from 'react';
import { connect } from 'react-redux';
import { IonRouterOutlet, IonSplitPane } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';

import Features from 'business/features';
import { authActions } from 'business/actions';
import { ROUTES } from 'business/enums';
import { Menu } from 'components';
import { HomeScreen, GroupScreen, LoginScreen } from 'screens';

import PrivateRoute from './privateRoute';

interface RouterProps {
  isLoggedIn: boolean;
  currentRoute: string;
  onLogout: Function;
}

const Router: React.FC<RouterProps> = ({ isLoggedIn, currentRoute, onLogout }) => {
  return (
    <IonReactRouter basename={process.env.REACT_APP_PUBLIC_URL}>
      {isLoggedIn && (
        <IonSplitPane contentId="main">
          {Features.MENU && <Menu currentRoute={currentRoute} onLogout={onLogout} />}
          <IonRouterOutlet id="main">
            <PrivateRoute
              path={ROUTES.HOME}
              component={HomeScreen}
              exact={true}
              isLoggedIn={isLoggedIn}
            />
            <PrivateRoute
              path={ROUTES.GROUP}
              component={GroupScreen}
              exact={true}
              isLoggedIn={isLoggedIn}
            />
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
  onLogout: authActions.logout,
};

const connected = connect(mapStateToProps, mapDispatchToProps);

export default connected(Router);
