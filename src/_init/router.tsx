import React, { useState } from 'react';
import { IonRouterOutlet, IonSplitPane } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';

import Menu from '../components/Menu';
import { HomeScreen, GroupScreen, LoginScreen } from '../screens';
import { authService } from '../business/services';

const App: React.FC = () => {
  const [selectedPage, setSelectedPage] = useState('');

  const isLoggedIn = authService.isLoggedIn();

  return (
    <IonReactRouter>
      
        {isLoggedIn && (
          <IonSplitPane contentId="main">
            <Menu selectedPage={selectedPage} />
            <IonRouterOutlet id="main">
              <Route path="/page/home" component={HomeScreen} exact={true} />
              <Route path="/page/group" component={GroupScreen} exact={true} />
              <Route path="/" render={() => <Redirect to="/page/home" />} />
            </IonRouterOutlet>
          </IonSplitPane>
        )}
        <IonRouterOutlet id="public">
          <Route path="/login" render={LoginScreen} exact={true} />
          <Route render={() => <Redirect to="/login" />} />
        </IonRouterOutlet>
    </IonReactRouter>
  );
};

export default App;
