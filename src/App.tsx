import Menu from './components/Menu';
import { HomeScreen, LoginScreen } from './screens';
import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { IonApp, IonRouterOutlet, IonSplitPane } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';

import store from './business/store';
import AppInit from './AppInit';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const App: React.FC = () => {
  const [selectedPage, setSelectedPage] = useState('');

  return (
    <Provider store={store}>
      <IonApp>
        <AppInit>
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
        </AppInit>
      </IonApp>
    </Provider>
  );
};

export default App;
