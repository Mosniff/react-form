import { FunctionComponent } from 'react';
import './user-tab.styles.css';
import { useFormContext } from '../../../../context';

interface FormFieldProps {
  name: string;
  required: boolean;
}

const FormField: FunctionComponent<FormFieldProps> = ({ name, required }) => (
  <div className="user-tab__form-field">
    <div className="user-tab__form-field-label">
      <span>{`${name}:`}</span>
      {required && <span className="user-tab__form-field-required-indicator">*</span>}
    </div>
    <input
      className="user-tab__form-field-input"
      type="text"
    />
  </div>
);

export const UserTab: FunctionComponent = () => {
  const { setActiveTab } = useFormContext();
  return (
    <form className="user-tab">
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
        className="user-tab__submit-button"
        type="button"
        onClick={() => { setActiveTab('Privacy'); }}
      >
        Submit
      </button>
    </form>
  );
};
