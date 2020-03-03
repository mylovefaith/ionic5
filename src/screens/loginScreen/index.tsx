import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  IonButtons,
  IonButton,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';

import { auth } from '../../business/actions';
import { User } from '../../business/models';

import './styles.scss';

interface LoginScreenProps {
  authToken: string;
  login: Function;
  logout: Function;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ authToken, login, logout }) => {
  const onSubmit = () => login('mylovefaith@gmail.com', '1111');

  useEffect(() => {
    if (authToken) logout();
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Login Page</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonButton expand="full" onClick={onSubmit}>
          Login
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

const mapStatetoProps = state => ({
  authToken: state.global.localStorage.authToken,
});

const mapDispatchToProps = {
  login: auth.login,
  logout: auth.logout,
};

export default connect(mapStatetoProps, mapDispatchToProps)(LoginScreen);
