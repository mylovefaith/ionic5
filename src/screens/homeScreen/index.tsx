import React from 'react';
import { connect } from 'react-redux';
import { IonButtons, IonButton, IonContent, IonPage, IonItem, IonLabel, IonToggle } from '@ionic/react';

import { theme } from 'business/services';
import { THEMES } from 'business/enums';
import { Dialog, Header } from 'components';
import { screen } from 'hoc';

interface OwnProps {}

const HomeScreen: React.FC<OwnProps> = () => {
  const toggleTheme = ({ detail }) => {
    theme.switchDarkMode(detail.checked);
  };

  const { DEFAULT, AUTUMN, NIGHT, NEON } = THEMES;

  return (
    <IonPage>
      <Header title="Home Page" />

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

const connected = connect(null, null);

export default connected(screen(HomeScreen));
