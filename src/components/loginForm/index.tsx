import React from 'react';
import { IonButton } from '@ionic/react';
import { Formik, Form } from 'formik';
import { mailOutline, lockClosedOutline } from 'ionicons/icons';

import { TextInput } from 'components';

import './styles.scss';

interface LoginFormProps {
  onSubmit: Function;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
  const validateForm = values => {
    const errors: any = {};
    if (!values.email.length) errors.email = 'Required';
    else if (values.email.length < 5) errors.email = 'Too short!';
    if (!values.password.length) errors.password = 'Required';
    else if (values.password.length < 5) errors.password = 'Password Too short!';
    return errors;
  };

  const onSubmitAfterValidation = values => onSubmit(values);

  return (
    <div className="login-box">
      <Formik
        initialValues={{ email: 'mylovefaith@gmail.com', password: 'peter02' }}
        validate={validateForm}
        onSubmit={onSubmitAfterValidation}>
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
  );
};

export default LoginForm;
