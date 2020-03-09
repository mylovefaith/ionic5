import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { IonButton, IonContent, IonPage } from '@ionic/react';
import { Formik, Form, Field, FormikProps, ErrorMessage } from 'formik';

import { authAction } from '../../business/actions';
import { User } from '../../business/models';
import { Header, TextInput } from '../../components';

import './styles.scss';

interface LoginScreenProps {
  authToken: string;
  login: Function;
  logout: Function;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ authToken, login, logout }) => {
  const onSubmit = () => login('mylovefaith@gmail.com', '1111');

  useEffect(() => {
    if (authToken) logout();
  }, []);

  return (
    <IonPage id="login-screen">
      <Header title="Login Page" />
      <IonContent>
        <Formik
          initialValues={{ email: 'mylovefaith@gmail.com', password: '' }}
          validate={values => {
            const errors: any = {};
            if (!values.email) errors.email = 'Required';
            if (values.email.length < 5) errors.email = 'Too short!';
            if (!values.password) errors.password = 'Required';
            if (values.password.length < 5) errors.password = 'Password Too short!';
            console.log('VALUES:ERRORS', values, errors);
            return errors;
          }}
          onSubmit={values => {
            console.log('handle Submit', values);
          }}>
          <Form>
            <h4>Login</h4>
            <TextInput type="email" name="email" label="Email" />
            <TextInput type="password" name="password" label="Password" />
            <IonButton expand="full" type="submit">
              Login
            </IonButton>
          </Form>
        </Formik>
      </IonContent>
    </IonPage>
  );
};

const mapStatetoProps = state => ({
  authToken: state.global.localStorage.authToken,
});

const mapDispatchToProps = {
  login: authAction.login,
  logout: authAction.logout,
};

export default connect(mapStatetoProps, mapDispatchToProps)(LoginScreen);
