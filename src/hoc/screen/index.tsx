import React, { Component } from 'react';
import { withIonLifeCycle } from '@ionic/react';
import { routerActions } from '$redux/actions';
import store from '$redux';

interface AsScreenViewProps {
  onHydrate?: Function;
  onDehydrate?: Function;
  match?: any;
}

const screen = ScreenView => {
  class AsScreenView extends Component<AsScreenViewProps> {
    static defaultProps: AsScreenViewProps = {
      onHydrate: () => {},
      onDehydrate: () => {},
    };

    ionViewWillEnter() {
      const { match } = this.props;
      if (match && match.path) store.dispatch(routerActions.setRoute(match.path));
      if (this.props.onHydrate) this.props.onHydrate();
    }

    ionViewWillLeave() {
      if (this.props.onDehydrate) this.props.onDehydrate();
    }

    render() {
      return <ScreenView {...this.props} />;
    }
  }

  return withIonLifeCycle(AsScreenView);
};

export default screen;
