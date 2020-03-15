import React from 'react';
import { IonItem, IonLabel, IonInput, IonIcon } from '@ionic/react';
import { FastField, ErrorMessage } from 'formik';

import './styles.scss';

interface TextInputProps {
  icon?: string;
  label?: string;
  name: string;
  placeholder?: string;
  position?: string;
  type?: string;
}

const defaultProps: TextInputProps = {
  icon: '',
  label: '',
  name: '',
  placeholder: '',
  position: 'stacked',
  type: 'text',
};

const getType = inputType => {
  return inputType || 'text';
};

const getPosition = position => {
  return position || 'fixed';
};

const TextInput: React.FC<TextInputProps> = ({
  icon,
  label,
  name,
  placeholder,
  position,
  type,
  ...props
}) => {
  return (
    <>
      <FastField name={name}>
        {({ form }) => (
          <>
            <IonItem>
              {icon !== '' && <IonIcon slot="start" icon={icon} />}
              {label !== '' && <IonLabel position={getPosition(position)}>{label}</IonLabel>}
              <ErrorMessage name={name} component="div" className="validation-error" />
              <IonInput
                {...props}
                type={getType(type)}
                name={name}
                placeholder={placeholder}
                onInput={e => {
                  const target = e.target as HTMLIonInputElement;
                  form.values[name] = target.value;
                  form.touched[name] = true;
                  form.validateForm();
                }}
                value={form.values[name]}></IonInput>
            </IonItem>
          </>
        )}
      </FastField>
    </>
  );
};

TextInput.defaultProps = defaultProps;

export default TextInput;
