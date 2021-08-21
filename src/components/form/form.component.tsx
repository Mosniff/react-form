import { FunctionComponent, useState } from 'react';
import { FormTabs } from './form-tabs';
import { FormContents } from './form-contents';
import './form.styles.css';

export type TabNames = 'User' | 'Privacy' | 'Done';

export const Form: FunctionComponent = () => {
  const [activeTab] = useState<TabNames>('User');

  return (
    <div className="form">
      <div className="form__wrapper">
        <FormTabs activeTab={activeTab} />
        <FormContents activeTab={activeTab} />
      </div>
    </div>
  );
};
