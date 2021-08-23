import React, { FunctionComponent, useState } from 'react';
import './form-field.styles.css';
import { useFormContext } from '../../../../../context';

interface FormFieldProps {
  name: string;
  required: boolean;
  type?: string;
  error?: string;
}

export const FormField: FunctionComponent<FormFieldProps> = ({
  name, required, type, error,
}) => {
  const { userFormDetails, setUserFormDetails } = useFormContext();
  const [touched, setTouched] = useState(false);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTouched(true);
    setUserFormDetails({ ...userFormDetails, [event.target.name]: event.target.value });
  };

  return (
    <div className="form-field">
      <div className="form-field__label">
        <span>{`${name}:`}</span>
        {required && <span className="form-field__required-indicator">*</span>}
      </div>
      <input
        name={name}
        className="form-field__input"
        type={type}
        onChange={handleChange}
      />
      <div className="form-field__error">
        <span className={`form-field__error-text ${error && touched ? 'form-field__error-text--show' : ''}`}>{error}</span>
      </div>
    </div>
  );
};
