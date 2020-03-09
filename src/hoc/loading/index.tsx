import React, { Component } from 'react';
import { IonLoading, withIonLifeCycle } from '@ionic/react';

interface AsLoadingViewProps {
  isLoading: boolean;
  loadingText?: string;
  onHydrate: Function;
  onDehydrate: Function;
}

const loading = LoadingView => {
  class AsLoadingView extends Component<AsLoadingViewProps> {
    static defaultProps: AsLoadingViewProps = {
      isLoading: false,
      loadingText: 'Loading...',
      onHydrate: null,
      onDehydrate: null,
    };

    constructor(props) {
      super(props);
    }

    ionViewWillEnter() {
      this.props.onHydrate();
    }

    ionViewWillLeave() {
      this.props.onDehydrate();
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
