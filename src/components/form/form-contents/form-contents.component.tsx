import { FunctionComponent } from 'react';
import { useFormContext } from '../../../context';
import './form-contents.styles.css';
import { UserTab } from './user-tab';

const DoneTab: FunctionComponent = () => (
  <div>Done tab</div>
);

const PrivacyTab: FunctionComponent = () => (
  <div>Privacy tab</div>
);

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
