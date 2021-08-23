import { FunctionComponent } from 'react';
import './submit-button.styles.css';

interface SubmitButtonProps {
  className?: string;
  onClick?: () => void;
}

export const SubmitButton: FunctionComponent<SubmitButtonProps> = ({ className, onClick }) => (
  <button
    className={`submit-button ${className}`}
    type="button"
    onClick={onClick}
  >
    Submit
  </button>
);
