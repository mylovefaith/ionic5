import React from 'react';
import {
  IonButtons,
  IonButton,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonItem,
  IonLabel,
  IonTitle,
  IonToggle,
  IonToolbar,
} from '@ionic/react';
import { Dialog } from '../../components';
import { theme } from '../../business/services';

interface OwnProps {}

const HomeScreen: React.FC<OwnProps> = () => {
  const toggleTheme = ({ detail }) => {
    theme.switchDarkMode(detail.checked);
  };

  const { DEFAULT, AUTUMN, NIGHT, NEON } = theme;

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
          <IonItem>
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
          </IonItem>
          <IonItem>
            <IonButton
              color="secondary"
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
          </IonItem>
          <IonItem>
            <IonLabel>Use Dark Theme</IonLabel>
            <IonToggle value="dark-theme" onIonChange={toggleTheme} />
          </IonItem>
          <IonItem>
            <IonButtons>
              <IonButton color="primary" onClick={() => theme.switchTheme(DEFAULT)}>
                Default
              </IonButton>
              <IonButton color="secondary" onClick={() => theme.switchTheme(AUTUMN)}>
                Autumn
              </IonButton>
              <IonButton color="tertiary" onClick={() => theme.switchTheme(NIGHT)}>
                Night
              </IonButton>
              <IonButton color="medium" onClick={() => theme.switchTheme(NEON)}>
                Neon
              </IonButton>
            </IonButtons>
          </IonItem>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default HomeScreen;
