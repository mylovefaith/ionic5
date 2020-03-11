import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { homeOutline, homeSharp, personOutline, personSharp, bookmark, logOutOutline } from 'ionicons/icons';

import { ROUTES } from 'business/enums';
import './styles.scss';

interface MenuProps extends RouteComponentProps {
  currentRoute: string;
  onLogout: Function;
}

interface AppPage {
  title: string;
  path: string;
  iosIcon: string;
  mdIcon: string;
}

const appPages: AppPage[] = [
  { title: 'Home', path: ROUTES.HOME, iosIcon: homeOutline, mdIcon: homeSharp },
  { title: 'Group', path: ROUTES.GROUP, iosIcon: personOutline, mdIcon: personSharp },
];

const labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

const Menu: React.FunctionComponent<MenuProps> = React.memo(
  ({ currentRoute, onLogout }) => {
    return (
      <IonMenu contentId="main" type="overlay">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Menu</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent class="outer-content">
          <IonList>
            <IonListHeader>Navigate</IonListHeader>
            {appPages.map((appPage, index) => {
              return (
                <IonMenuToggle key={index} autoHide={false}>
                  <IonItem
                    className={currentRoute === appPage.path ? 'selected pointer' : 'pointer'}
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
            <IonItem lines="none" onClick={() => onLogout()} detail={false}>
              <IonIcon slot="start" icon={logOutOutline} />
              <IonLabel>Log Out</IonLabel>
            </IonItem>
          </IonList>

          <IonList>
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
  },
  (pp, np) => pp.currentRoute === np.currentRoute
);

export default withRouter(Menu);
