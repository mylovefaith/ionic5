import React, { useEffect } from 'react';
import { IonLoading } from '@ionic/react';
import { connect } from 'react-redux';

import { initActions as loadAppAction } from '$redux/actions';
import { LoadingModel } from '$redux/loading/types';
import { Dialog } from '$components';
import Router from './appRouter';

import '$theme/general.scss';

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

  const { isLoading, loadingText, hasError } = loading;

  if (initSuccess === false && hasError) {
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
  initSuccess: state.init.initSuccess,
  loading: state.loading,
});

const mapDispatchToProps = {
  loadApp: loadAppAction.loadApp,
};

export default connect(mapStateToProps, mapDispatchToProps)(AppInit);
