import React from 'react';
import { connect } from 'react-redux';
import { IonContent, IonPage, IonToast } from '@ionic/react';

import { authActions } from 'business/actions';
import { Header, LoginForm } from 'components';
import { screen } from 'hoc';

import './styles.scss';

interface LoginScreenProps {
  login: Function;
  error: string;
}

const LoginScreen: React.FC<LoginScreenProps> = React.memo(
  ({ login, error }) => {
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
  (pp, np) => pp.error === np.error,
);

const mapStateToProps = state => ({
  error: state.loading.err,
});

const mapDispatchToProps = {
  login: authActions.login,
};

const connected = connect(mapStateToProps, mapDispatchToProps);

export default connected(screen(LoginScreen));
