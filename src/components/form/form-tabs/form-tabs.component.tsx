import { FunctionComponent } from 'react';
import { TabNames } from '..';
import './form-tabs.styles.css';

interface FormTabsProps {
  activeTab: TabNames;
}

interface FormTabProps {
  name: string;
  activeTab: TabNames;
}

const FormTab: FunctionComponent<FormTabProps> = ({ name, activeTab }) => (
  <div className={`form-tabs__tab${activeTab === name ? ' form-tabs__tab--active' : ''}`}>
    <span className="form-tabs__name">{name}</span>
  </div>
);

export const FormTabs: FunctionComponent<FormTabsProps> = ({ activeTab }) => (
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
