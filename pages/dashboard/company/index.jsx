import Sidenav from "../../shared-components/Sidenav";

import CompanyTabs from './components/CompanyTabs';

import classes from '../../../styles/pages/company.module.css';
import DashboardHeader from "../../shared-components/DashboardHeader";

export default function Company() {
  return <div className="dashboard">
    <Sidenav />
    <div className="dashboard__body">
      <DashboardHeader />
      <div className={classes['company']}>
        <CompanyTabs />
      </div>
    </div>
  </div>
}
