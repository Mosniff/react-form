import { FunctionComponent } from 'react';
import { FormTabs } from './form-tabs';
import { FormContents } from './form-contents';
import './form.styles.css';

export const Form: FunctionComponent = () => (
  <div className="form">
    <div className="form__wrapper">
      <FormTabs />
      <FormContents />
    </div>
  </div>
);
