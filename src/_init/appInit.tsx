import React, { useEffect, ReactNode } from 'react';
import { IonLoading } from '@ionic/react';
import { connect } from 'react-redux';

import { Store } from '../business/models';
import { loadApp as loadAppAction } from '../business/actions';

import Router from './router';

interface AppInitProps {
  children: ReactNode;
  store: Store;
  authToken: string;
  loadApp: Function;
}

/* Perform necessary action when the app is loaded before UI gets shown */
const AppInit: React.FC<AppInitProps> = ({ children, loadApp, store, authToken }) => {
  useEffect(() => {
    loadApp();
  }, []);

  // Should display loading
  if (!store) return <IonLoading isOpen={true} message={'Initializing App...'} />;

  console.log('ENV', process.env);
  console.log('RENDER appInit:1');

  return <Router isLoggedIn={authToken !== null} />;
};

const mapStateToProps = state => ({
  store: state.global.store,
  authToken: state.global.localStorage.authToken,
});

const mapDispatchToProps = {
  loadApp: loadAppAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(AppInit);
