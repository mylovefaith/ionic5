import React, { Component } from 'react';
import { IonLoading, withIonLifeCycle } from '@ionic/react';

interface AsLoadingViewProps {
  isLoading: boolean;
  onHydrate: Function;
  onDehydrate: Function;
}

const loading = LoadingView => {
  class AsLoadingView extends Component<AsLoadingViewProps> {
    static defaultProps: AsLoadingViewProps = {
      isLoading: true,
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
      const { isLoading } = this.props;

      return (
        <>
          <IonLoading isOpen={isLoading !== false} message={'Loading...'} />
          <LoadingView {...this.props} />
        </>
      );
    }
  }

  return withIonLifeCycle(AsLoadingView);
};

export default loading;
