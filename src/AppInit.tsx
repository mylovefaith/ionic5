import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Store } from './business/models';

import { loadApp as loadAppAction } from './business/actions';

interface AppInitProps {
  children: Node;
  store: Store;
  loadApp: Function;
}

const AppInit: React.FC<AppInitProps> = ({ children, loadApp, store }) => {
  useEffect(() => {
    loadApp();
  }, []);

  // Should display loading
  if (!store) return null;

  return <>{children}</>;
};

const mapStateToProps = state => ({
  store: state.global.store,
});

const mapDispatchToProps = {
  loadApp: loadAppAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(AppInit);
