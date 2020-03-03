import React, { useState } from 'react';
import { IonRouterOutlet, IonSplitPane } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';

import Menu from '../components/Menu';
import { HomeScreen, GroupScreen } from '../screens';
import LoginScreen from '../screens/loginScreen';
import PrivateRoute from './privateRoute';

interface RouterProps {
  isLoggedIn: boolean;
}

const Router: React.FC<RouterProps> = ({ isLoggedIn }) => {
  const [selectedPage, setSelectedPage] = useState('');

  return (
    <IonReactRouter>
      {isLoggedIn && (
        <IonSplitPane contentId="main">
          <Menu selectedPage={selectedPage} />
          <IonRouterOutlet id="main">
            <PrivateRoute path="/page/home" component={HomeScreen} exact={true} isLoggedIn={isLoggedIn} />
            <PrivateRoute path="/page/group" component={GroupScreen} exact={true} isLoggedIn={isLoggedIn} />
            <Route path="/" render={() => <Redirect to="/page/home" />} />
          </IonRouterOutlet>
        </IonSplitPane>
      )}

      <Route path="/login" component={LoginScreen} exact={true} />
      {!isLoggedIn && <Route path="/" render={() => <Redirect to="/login" />} />}
    </IonReactRouter>
  );
};

export default Router;
