import React from 'react';
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
import { Dialog } from '../../components';

interface OwnProps {}

const HomeScreen: React.FC<OwnProps> = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Home Page</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <div className="ion-padding-top ion-text-center">
          <h2>Welcome!</h2>
          Home page content
          <div>
            <IonButton
              onClick={() =>
                Dialog.alert({
                  title: 'Success',
                  message: 'Successfully saved!',
                  button: 'OK',
                })
              }>
              Show Alert
            </IonButton>
          </div>
          <div>
            <IonButton
              onClick={() =>
                Dialog.confirm({
                  title: 'Wait!...',
                  message: 'Are you sure you want to delete? This action is irreversable.',
                  button: 'Yes, Delete!',
                  button2: "NO! Don't",
                  onPress: () => {
                    console.log('CONFIRM PRESSED!');
                  },
                })
              }>
              Show Confirm
            </IonButton>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default HomeScreen;
