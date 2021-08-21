import {
  ReactNode,
  createContext,
  FunctionComponent,
  // useCallback,
  useContext,
  // useRef,
  useState,
  // useMemo,
  // RefObject,
  // MutableRefObject,
} from 'react';

export type TabName = 'User' | 'Privacy' | 'Done';

interface ContextState {
  activeTab: TabName;
  setActiveTab: (value: TabName) => void;
}

interface FormProviderProps {
  children: ReactNode;
}

const FormContext = createContext<ContextState | undefined>(undefined);

export const FormProvider: FunctionComponent<FormProviderProps> = ({ children }) => {
  const [activeTab, setActiveTab] = useState<TabName>('User');

  return (
    <FormContext.Provider value={{
      activeTab,
      setActiveTab,
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
