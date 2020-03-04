import React from 'react';
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';

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
        </div>
      </IonContent>
    </IonPage>
  );
};

export default HomeScreen;
