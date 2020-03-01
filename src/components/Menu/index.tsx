import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from '@ionic/react';
import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { homeOutline, homeSharp, personOutline, personSharp, bookmark } from 'ionicons/icons';
import './styles.scss';

interface MenuProps extends RouteComponentProps {
  selectedPage: string;
}

interface AppPage {
  title: string;
  path: string;
  iosIcon: string;
  mdIcon: string;
}

const appPages: AppPage[] = [
  { title: 'Home', path: '/page/home', iosIcon: homeOutline, mdIcon: homeSharp },
  { title: 'Login', path: '/page/login', iosIcon: personOutline, mdIcon: personSharp },
];

const labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

const Menu: React.FunctionComponent<MenuProps> = ({ selectedPage }) => {
  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>Menu</IonListHeader>
          <IonNote>Pages</IonNote>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem
                  className={selectedPage === appPage.title ? 'selected' : ''}
                  routerLink={appPage.path}
                  routerDirection="none"
                  lines="none"
                  detail={false}>
                  <IonIcon slot="start" icon={appPage.iosIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>

        <IonList id="labels-list">
          <IonListHeader>Labels</IonListHeader>
          {labels.map((label, index) => (
            <IonItem lines="none" key={index}>
              <IonIcon slot="start" icon={bookmark} />
              <IonLabel>{label}</IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default withRouter(Menu);
