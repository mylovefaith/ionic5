import React, { useEffect, ReactNode } from 'react';
import { connect } from 'react-redux';
import { Store } from '../business/models';

import { loadApp as loadAppAction } from '../business/actions';

interface AppInitProps {
  children: ReactNode;
  store: Store;
  loadApp: Function;
}

/* Perform necessary action when the app is loaded before UI gets shown */
const AppInit: React.FC<AppInitProps> = ({ children, loadApp, store }) => {
  useEffect(() => {
    loadApp();
  }, []);

  // Should display loading
  if (!store) return null;

  console.log("RENDER appInit:1")

  return <>{children}</>;
};

const mapStateToProps = state => ({
  store: state.global.store,
});

const mapDispatchToProps = {
  loadApp: loadAppAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(AppInit);
