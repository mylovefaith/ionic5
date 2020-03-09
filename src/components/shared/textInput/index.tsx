import React from 'react';
import { IonItem, IonLabel, IonInput } from '@ionic/react';
import { FastField, ErrorMessage } from 'formik';

interface TextInputProps {
  label?: string;
  type?: string;
  position?: string;
  name: string;
}

const defaultProps: TextInputProps = {
  label: '',
  type: 'text',
  position: 'stacked',
  name: '',
};

const getType = inputType => {
  return inputType || 'text';
};

const getPosition = position => {
  return position || 'fixed';
};

const TextInput: React.FC<TextInputProps> = ({ label, type, position, name, ...props }) => {
  console.log('RENDER Text Input', name);

  return (
    <>
      <ErrorMessage name={name} component="div" />
      <FastField name={name}>
        {({ form }) => (
          <IonItem>
            {label !== '' && <IonLabel position={getPosition(position)}>{label}</IonLabel>}
            <IonInput
              {...props}
              type={getType(type)}
              name={name}
              onInput={e => {
                const target = e.target as HTMLIonInputElement;
                form.values[name] = target.value;
                form.touched[name] = true;
                form.validateForm();
              }}
              value={form.values[name]}></IonInput>
          </IonItem>
        )}
      </FastField>
    </>
  );
};

TextInput.defaultProps = defaultProps;

export default TextInput;
