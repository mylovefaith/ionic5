import React, { useEffect } from 'react';
import { IonLoading } from '@ionic/react';
import { connect } from 'react-redux';

import { Dialog } from 'components';
import { initActions as loadAppAction } from 'business/_actions';
import Router from './appRouter';

import 'theme/general.scss';

interface AppInitProps {
  initSuccess: boolean;
  loadApp: Function;
}

/* Perform necessary action when the app is loaded before UI gets shown */
const AppInit: React.FC<AppInitProps> = ({ loadApp, initSuccess }) => {
  useEffect(() => {
    loadApp();
  }, []);

  if (initSuccess === false) {
    Dialog.alert({ title: 'Network Error', message: 'App failed to initialize. Please try again later.' });
    return null;
  }

  // Should display loading
  if (!initSuccess) return <IonLoading isOpen={true} message={'Initializing App...'} />;

  return <Router />;
};

const mapStateToProps = state => ({
  initSuccess: state.global.initSuccess,
});

const mapDispatchToProps = {
  loadApp: loadAppAction.loadApp,
};

export default connect(mapStateToProps, mapDispatchToProps)(AppInit);
