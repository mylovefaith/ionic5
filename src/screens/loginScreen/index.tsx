import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { IonButton, IonContent, IonPage } from '@ionic/react';
import { Formik, Form } from 'formik';
import { mailOutline, lockClosedOutline } from 'ionicons/icons';

import { authAction } from '../../business/actions';
import { Header, TextInput } from '../../components';
import { loading } from '../../hoc';

import './styles.scss';

interface LoginScreenProps {
  authToken: string;
  login: Function;
  logout: Function;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ authToken, login, logout }) => {
  useEffect(() => {
    if (authToken) logout();
  }, []);

  const validateForm = values => {
    const errors: any = {};
    if (!values.email.length) errors.email = 'Required';
    else if (values.email.length < 5) errors.email = 'Too short!';
    if (!values.password.length) errors.password = 'Required';
    else if (values.password.length < 5) errors.password = 'Password Too short!';
    return errors;
  };

  const onSubmit = values => login(values);

  return (
    <IonPage id="login-screen">
      <Header title="Welcome to Ionic5" />

      <IonContent>
        <div className="login-box">
          <Formik
            initialValues={{ email: 'mylovefaith@gmail.com', password: 'peter02' }}
            validate={validateForm}
            onSubmit={onSubmit}>
            {({ isSubmitting, isValid }) => (
              <Form>
                <h4>Login</h4>
                <TextInput icon={mailOutline} name="email" placeholder="Email address" type="email" />
                <TextInput icon={lockClosedOutline} name="password" placeholder="Password" type="password" />
                <IonButton expand="full" type="submit" disabled={!isValid || isSubmitting}>
                  Login
                </IonButton>
              </Form>
            )}
          </Formik>
        </div>
      </IonContent>
    </IonPage>
  );
};

const mapStateToProps = state => ({
  authToken: state.global.localStorage.authToken,
  isLoading: state.loading.isLoading,
  loadingText: 'Logging In...',
});

const mapDispatchToProps = {
  login: authAction.login,
  logout: authAction.logout,
};

const connected = connect(mapStateToProps, mapDispatchToProps);

export default connected(loading(LoginScreen));
