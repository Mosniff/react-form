import {
  ReactNode,
  createContext,
  FunctionComponent,
  useContext,
  useState,
} from 'react';

export type TabName = 'User' | 'Privacy' | 'Done';

interface FormErrors {
  nameError: string;
  emailError: string;
  passwordError: string;
}

interface FormDetails {
  name: string;
  role: string;
  email: string;
  password: string;
}

interface ContextState {
  activeTab: TabName;
  setActiveTab: (value: TabName) => void;
  errors: FormErrors;
  setErrors: (value: FormErrors) => void;
  userFormDetails: FormDetails;
  setUserFormDetails: (value: FormDetails) => void;
  nameError: string;
  setNameError: (value: string) => void;
  emailError: string;
  setEmailError: (value: string) => void;
  passwordError: string;
  setPasswordError: (value: string) => void;
  userFormValid: boolean;
  setUserFormValid: (value: boolean) => void;
  updatesByEmail: boolean;
  setUpdatesByEmail: (value: boolean) => void;
  otherProductsByEmail: boolean;
  setOtherProductsByEmail: (value: boolean) => void;
}

interface FormProviderProps {
  children: ReactNode;
}

const FormContext = createContext<ContextState | undefined>(undefined);

export const FormProvider: FunctionComponent<FormProviderProps> = ({ children }) => {
  const [activeTab, setActiveTab] = useState<TabName>('User');
  const [errors, setErrors] = useState<FormErrors>({
    nameError: '',
    emailError: '',
    passwordError: '',
  });
  const [userFormDetails, setUserFormDetails] = useState<FormDetails>({
    name: '',
    role: '',
    email: '',
    password: '',
  });
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [userFormValid, setUserFormValid] = useState(false);
  const [updatesByEmail, setUpdatesByEmail] = useState(false);
  const [otherProductsByEmail, setOtherProductsByEmail] = useState(false);

  return (
    <FormContext.Provider value={{
      activeTab,
      setActiveTab,
      errors,
      setErrors,
      userFormDetails,
      setUserFormDetails,
      nameError,
      setNameError,
      emailError,
      setEmailError,
      passwordError,
      setPasswordError,
      userFormValid,
      setUserFormValid,
      updatesByEmail,
      setUpdatesByEmail,
      otherProductsByEmail,
      setOtherProductsByEmail,
    }}
    >
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = (): ContextState => {
  const context = useContext(FormContext);
  if (context === undefined) {
    throw new Error('useFormContext must be used within a FormProvider');
  }
  return context;
};
