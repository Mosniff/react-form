import React, { FunctionComponent, useState } from 'react';
import './form-field.styles.css';
import { useFormContext } from '../../../../../context';

interface FormFieldProps {
  name: string;
  required: boolean;
  type?: string;
  error?: string;
  submitAttempted?: boolean
}

export const FormField: FunctionComponent<FormFieldProps> = ({
  name, required, type, error, submitAttempted,
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
        <label
          htmlFor={`${name}_input`}
        >
          {`${name}:`}
        </label>
        {required && <span className="form-field__required-indicator">*</span>}
      </div>
      <input
        name={name}
        className="form-field__input"
        type={type}
        onChange={handleChange}
        id={`${name}_input`}
      />
      <div className="form-field__error">
        {error && (touched || submitAttempted) && (<span>{error}</span>)}
      </div>
    </div>
  );
};
