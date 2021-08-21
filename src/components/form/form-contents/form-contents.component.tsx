import { FunctionComponent } from 'react';
import { TabNames } from '..';
import './form-contents.styles.css';

interface FormContentsProps {
  activeTab: TabNames;
}

interface FormFieldProps {
  name: string;
  required: boolean;
}

const FormField: FunctionComponent<FormFieldProps> = ({ name, required }) => (
  <div className="form-content__form-field">
    <div className="form-content__form-field-label">
      <span>{`${name}:`}</span>
      {required && <span className="form-content__form-field-required-indicator">*</span>}
    </div>
    <input
      className="form-content__form-field-input"
      type="text"
    />
  </div>
);

const UserTab: FunctionComponent = () => (
  <form className="form-content__user-tab">
    <FormField
      name="name"
      required={true}
    />
    <FormField
      name="role"
      required={false}
    />
    <FormField
      name="email"
      required={true}
    />
    <FormField
      name="password"
      required={true}
    />
    <button
      className="form-contents__submit-button"
      type="submit"
    >
      Submit
    </button>
  </form>
);

const DoneTab: FunctionComponent = () => (
  <div>Done tab</div>
);

const PrivacyTab: FunctionComponent = () => (
  <div>Privacy tab</div>
);

export const FormContents: FunctionComponent<FormContentsProps> = ({ activeTab }) => (
  <div className="form-contents">
    {activeTab === 'User' && <UserTab />}
    {activeTab === 'Privacy' && <PrivacyTab />}
    {activeTab === 'Done' && <DoneTab />}
  </div>
);
