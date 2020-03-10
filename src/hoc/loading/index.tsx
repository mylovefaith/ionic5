import React, { Component } from 'react';
import { IonLoading, withIonLifeCycle } from '@ionic/react';
import { routeAction } from '../../business/actions';
import store from '../../business/store';

interface AsLoadingViewProps {
  isLoading?: boolean;
  loadingText?: string;
  onHydrate?: Function;
  onDehydrate?: Function;
  match?: any;
}

const loading = LoadingView => {
  class AsLoadingView extends Component<AsLoadingViewProps> {
    static defaultProps: AsLoadingViewProps = {
      isLoading: false,
      loadingText: 'Loading...',
      onHydrate: null,
      onDehydrate: null,
    };

    ionViewWillEnter() {
      const { match } = this.props;
      if (match && match.path) store.dispatch(routeAction.route(match.path));
      if (this.props.onHydrate) this.props.onHydrate();
    }

    ionViewWillLeave() {
      if (this.props.onDehydrate) this.props.onDehydrate();
    }

    shouldComponentUpdate(nextProps) {
      return this.props.isLoading !== nextProps.isLoading;
    }

    render() {
      const { isLoading, loadingText } = this.props;

      return (
        <>
          <IonLoading isOpen={isLoading !== false} message={loadingText} />
          <LoadingView {...this.props} />
        </>
      );
    }
  }

  return withIonLifeCycle(AsLoadingView);
};

export default loading;
