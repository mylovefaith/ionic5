import React, { useEffect, ReactNode } from 'react';
import { IonLoading } from '@ionic/react';
import { connect } from 'react-redux';

import { Dialog } from '../components';
import { Store } from '../business/models';
import { loadApp as loadAppAction } from '../business/actions';

import Router from './router';

interface AppInitProps {
  initSuccess: boolean;
  authToken: string;
  loadApp: Function;
}

/* Perform necessary action when the app is loaded before UI gets shown */
const AppInit: React.FC<AppInitProps> = ({ loadApp, initSuccess, authToken }) => {
  useEffect(() => {
    loadApp();
  }, [initSuccess]);

  if (initSuccess === false) {
    Dialog.alert({ title: 'Network Error', message: 'App failed to initialize. Please try again later.' });
    return null;
  }

  // Should display loading
  if (!initSuccess) return <IonLoading isOpen={true} message={'Initializing App...'} />;

  console.log('ENV', process.env);
  console.log('RENDER appInit');

  return <Router isLoggedIn={authToken !== null} />;
};

const mapStateToProps = state => ({
  initSuccess: state.global.initSuccess,
  authToken: state.global.localStorage.authToken,
});

const mapDispatchToProps = {
  loadApp: loadAppAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(AppInit);
