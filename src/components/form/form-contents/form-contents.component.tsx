import { FunctionComponent } from 'react';
import { useFormContext } from '../../../context';
import './form-contents.styles.css';
import { UserTab } from './user-tab';
import { PrivacyTab } from './privacy-tab';
import { DoneTab } from './done-tab';

export const FormContents: FunctionComponent = () => {
  const { activeTab } = useFormContext();
  return (
    <div className="form-contents">
      {activeTab === 'User' && <UserTab />}
      {activeTab === 'Privacy' && <PrivacyTab />}
      {activeTab === 'Done' && <DoneTab />}
    </div>
  );
};
