import React from 'react';
import { Provider } from 'react-redux';
import { IonApp } from '@ionic/react';

import store from '$redux';
import AppInit from './appInit';

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
import '../theme/variables.css';

const App: React.FC = () => {
  console.log('ENV', process.env);

  return (
    <Provider store={store}>
      <IonApp>
        <AppInit />
      </IonApp>
    </Provider>
  );
};

export default App;
