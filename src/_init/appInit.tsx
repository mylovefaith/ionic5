import React, { useEffect } from 'react';
import { IonLoading } from '@ionic/react';
import { connect } from 'react-redux';

import { Dialog } from 'components';
import { initActions as loadAppAction } from 'business/actions';
import { LoadingModel } from 'business/global/loading/types';
import Router from './appRouter';

import 'theme/general.scss';

interface AppInitProps {
  initSuccess: boolean;
  loadApp: Function;
  loading: LoadingModel;
}

/* Perform necessary action when the app is loaded before UI gets shown */
const AppInit: React.FC<AppInitProps> = props => {
  const { loadApp, initSuccess, loading } = props;

  useEffect(() => {
    loadApp();
  }, [loadApp]);

  const { isLoading, loadingText, err } = loading;

  if (initSuccess === false || err !== null) {
    Dialog.alert({
      title: 'Network Error',
      message: 'App failed to initialize. Please try again later.',
    });
    return null;
  }

  return (
    <>
      <IonLoading isOpen={isLoading} message={loadingText} />
      {initSuccess && <Router />}
    </>
  );
};

const mapStateToProps = state => ({
  initSuccess: state.global.initSuccess,
  loading: state.loading,
});

const mapDispatchToProps = {
  loadApp: loadAppAction.loadApp,
};

export default connect(mapStateToProps, mapDispatchToProps)(AppInit);
