import React, { useState, useEffect } from 'react';
import { IonButtons, IonButton, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { RouteComponentProps } from 'react-router';

import './styles.scss';

interface OwnProps extends RouteComponentProps<{ name: string }> {}

const LoginScreen: React.FC<OwnProps> = () => {

  const onSubmit = () => {
    console.log("HANDLE CLICK")
  }

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
        <IonButton expand='full' onClick={onSubmit} >Login</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default LoginScreen;
