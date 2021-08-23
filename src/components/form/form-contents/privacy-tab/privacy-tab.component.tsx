import { FunctionComponent } from 'react';
import './privacy-tab.styles.css';
import { SubmitButton } from '../../../common/submit-button';
import { useFormContext } from '../../../../context';

export const PrivacyTab: FunctionComponent = () => {
  const {
    updatesByEmail,
    setUpdatesByEmail,
    otherProductsByEmail,
    setOtherProductsByEmail,
    setActiveTab,
  } = useFormContext();

  const progressForm = () => {
    setActiveTab('Done');
  };

  return (
    <form className="privacy-tab">
      <label className="privacy-tab__option">
        <span className="privacy-tab__option-text">Receive updates about our products by email</span>
        <input
          className="privacy-tab__option-checkbox"
          type="checkbox"
          checked={updatesByEmail}
          onChange={() => { setUpdatesByEmail(!updatesByEmail); }}
        />
      </label>
      <label className="privacy-tab__option">
        <span className="privacy-tab__option-text">Receive communication by email for other products created by our team</span>
        <input
          className="privacy-tab__option-checkbox"
          type="checkbox"
          checked={otherProductsByEmail}
          onChange={() => { setOtherProductsByEmail(!otherProductsByEmail); }}
        />
      </label>
      <SubmitButton
        className="privacy-tab__submit-button"
        onClick={() => { progressForm(); }}
      />
    </form>
  );
};
