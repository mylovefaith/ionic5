import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { IonContent, IonPage, IonToast } from '@ionic/react';

import { authActions } from 'business/actions';
import { Header, LoginForm } from 'components';
import { loading } from 'hoc';

import './styles.scss';

interface LoginScreenProps {
  authToken: string;
  login: Function;
  logout: Function;
  error: string;
}

const LoginScreen: React.FC<LoginScreenProps> = React.memo(
  ({ authToken, login, logout, error }) => {
    useEffect(() => {
      if (authToken) logout();
    }, []);

    const onSubmit = values => login(values);

    return (
      <IonPage id="login-screen">
        <Header title="Welcome to Ionic5" />
        <IonContent>
          <LoginForm onSubmit={onSubmit} />
        </IonContent>
        <IonToast
          isOpen={error !== null}
          duration={3000}
          color="danger"
          message={error || ''}
          position="top"
        />
      </IonPage>
    );
  },
  (pp, np) => pp.error === np.error
);

const mapStateToProps = state => ({
  authToken: state.global.localStorage.authToken,
  isLoading: state.loading.isLoading,
  loadingText: 'Logging In...',
  error: state.loading.err,
});

const mapDispatchToProps = {
  login: authActions.login,
  logout: authActions.logout,
};

const connected = connect(mapStateToProps, mapDispatchToProps);

export default connected(loading(LoginScreen));
