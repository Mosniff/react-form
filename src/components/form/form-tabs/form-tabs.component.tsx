import { FunctionComponent } from 'react';
import './form-tabs.styles.css';
import { useFormContext, TabName } from '../../../context/form.context';

interface FormTabProps {
  name: string;
  activeTab: TabName;
}

const FormTab: FunctionComponent<FormTabProps> = ({ name, activeTab }) => (
  <div className={`form-tabs__tab${activeTab === name ? ' form-tabs__tab--active' : ''}`}>
    <span className="form-tabs__name">{name}</span>
  </div>
);

export const FormTabs: FunctionComponent = () => {
  const { activeTab } = useFormContext();
  return (
    <div className="form-tabs">
      {['User', 'Privacy', 'Done'].map((tab) => (
        <FormTab
          key={tab}
          name={tab}
          activeTab={activeTab}
        />
      ))}
    </div>
  );
};
