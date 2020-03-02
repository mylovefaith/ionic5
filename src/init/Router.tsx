import Menu from '../components/Menu';
import { HomeScreen, LoginScreen } from '../screens';
import React, { useState } from 'react';
import { IonRouterOutlet, IonSplitPane } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';

const App: React.FC = () => {
  const [selectedPage, setSelectedPage] = useState('');

  return (
    <IonReactRouter>
      <IonSplitPane contentId="main">
        <Menu selectedPage={selectedPage} />
        <IonRouterOutlet id="main">
          <Route path="/page/home" render={HomeScreen} exact={true} />
          <Route path="/page/login" render={LoginScreen} exact={true} />
          <Route path="/" render={() => <Redirect to="/page/home" />} exact={true} />
        </IonRouterOutlet>
      </IonSplitPane>
    </IonReactRouter>
  );
};

export default App;
