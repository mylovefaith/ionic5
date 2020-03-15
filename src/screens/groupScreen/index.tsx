import React from 'react';
import { connect } from 'react-redux';
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';

import { loading } from 'hoc';
import { groupActions } from 'business/actions';

interface GroupScreenProps {
  isLoading;
  onHydrate;
  onDehydrate;
  group;
}

const GroupScreen: React.FC<GroupScreenProps> = ({ group }) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Group Pages</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>Group page content</IonContent>
    </IonPage>
  );
};

const mapStateToProps = state => ({
  group: state.group,
  isLoading: state.loading.isLoading,
});

const mapDispatchToProps = {
  onHydrate: () => groupActions.fetchGroup(1),
  onDehydrate: groupActions.dehydrate,
};

const connected = connect(mapStateToProps, mapDispatchToProps);

export default connected(loading(GroupScreen));
