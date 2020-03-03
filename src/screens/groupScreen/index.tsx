import React from 'react';
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';

interface OwnProps {}

const GroupScreen: React.FC<OwnProps> = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Group Page</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>Group page content</IonContent>
    </IonPage>
  );
};

export default GroupScreen;
