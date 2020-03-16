import React from 'react';
import { connect } from 'react-redux';
import { IonContent, IonPage, IonToast } from '@ionic/react';

import { authActions } from '$redux/actions';
import { Header, LoginForm } from '$components';
import { screen } from '$hoc';

import './styles.scss';
import { LoadingModel } from '$redux/loading/types';

interface LoginScreenProps {
  login: Function;
  loading: LoadingModel;
}

const LoginScreen: React.FC<LoginScreenProps> = React.memo(
  ({ login, loading }) => {
    const onSubmit = values => login(values);
    const { hasError, err } = loading;

    return (
      <IonPage id="login-screen">
        <Header title="Welcome to Ionic5" />
        <IonContent>
          <LoginForm onSubmit={onSubmit} />
        </IonContent>
        <IonToast isOpen={hasError} duration={3000} color="danger" message={err} position="top" />
      </IonPage>
    );
  },
  (pp, np) => pp.loading.hasError === np.loading.hasError,
);

const mapStateToProps = state => ({
  loading: state.loading,
});

const mapDispatchToProps = {
  login: authActions.login,
};

const connected = connect(mapStateToProps, mapDispatchToProps);

export default connected(screen(LoginScreen));
