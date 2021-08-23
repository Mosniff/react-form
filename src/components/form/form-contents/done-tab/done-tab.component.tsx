import { FunctionComponent } from 'react';
import './done-tab.styles.css';
import { useFormContext } from '../../../../context';

export const DoneTab: FunctionComponent = () => {
  const { userFormDetails, updatesByEmail, otherProductsByEmail } = useFormContext();
  console.log(userFormDetails);
  console.log(`updatesByEmail ${updatesByEmail}`);
  console.log(`otherProductsByEmail ${otherProductsByEmail}`);

  return (
    <div className="done-tab">
      <img
        className="done-tab__tick"
        src="/green-tick.png"
        alt=""
      />
      <span className="done-tab__text">Please verify your email address, you should have received an email from us already!</span>
    </div>
  );
};
