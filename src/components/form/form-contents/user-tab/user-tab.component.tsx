import React, {
  FunctionComponent, useCallback, useEffect, useRef, useState,
} from 'react';
import './user-tab.styles.css';
import { useFormContext } from '../../../../context';
import { SubmitButton } from '../../../common/submit-button';
import { FormField } from './form-field';

export const UserTab: FunctionComponent = () => {
  const {
    setActiveTab,
    userFormDetails,
    nameError,
    setNameError,
    emailError,
    setEmailError,
    passwordError,
    setPasswordError,
    userFormValid,
    setUserFormValid,
  } = useFormContext();

  const [submitAttempted, setSubmitAttempted] = useState(false);

  const validEmail = (email: string) => {
    // eslint-disable-next-line max-len
    const validEmailPattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    return validEmailPattern.test(email);
  };

  const validPassword = (password: string) => {
    const hasNumber = /\d/;
    return hasNumber.test(password) && password.match(/[a-z]/) && password.match(/[A-Z]/) && password.length > 9;
  };

  const validateFields = useCallback(() => {
    setUserFormValid(true);
    if (userFormDetails.name.length < 1) {
      setNameError('Name cannot be empty.');
      setUserFormValid(false);
    } else {
      setNameError('');
    }

    if (!validEmail(userFormDetails.email)) {
      setEmailError('Must be a valid email address.');
      setUserFormValid(false);
    } else {
      setEmailError('');
    }

    if (!validPassword(userFormDetails.password)) {
      setPasswordError('Password must be at least 9 characters and contain a number, an uppercase letter and a lowercase letter.');
      setUserFormValid(false);
    } else {
      setPasswordError('');
    }
  }, [userFormDetails, setNameError, setEmailError, setPasswordError, setUserFormValid]);

  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }

    validateFields();
  }, [userFormDetails, validateFields]);

  const progressForm = () => {
    validateFields();
    setSubmitAttempted(true);

    if (userFormValid) {
      setActiveTab('Privacy');
    }
  };

  return (
    <form className="user-tab">
      <FormField
        name="name"
        required={true}
        type="text"
        error={nameError}
        submitAttempted={submitAttempted}
      />
      <FormField
        name="role"
        required={false}
        type="text"
      />
      <FormField
        name="email"
        required={true}
        type="text"
        error={emailError}
        submitAttempted={submitAttempted}
      />
      <FormField
        name="password"
        required={true}
        type="password"
        error={passwordError}
        submitAttempted={submitAttempted}
      />
      <SubmitButton
        className="user-tab__submit-button"
        onClick={() => { progressForm(); }}
      />
    </form>
  );
};
