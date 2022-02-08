import CompanyDescription from "./company-overview/CompanyDescription";
import CompanySummary from "./company-overview/CompanySummary";
import TeamMemberList from "../../team-members/components/TeamMemberList";

import classes from '../../../../styles/components/dashboard/company/company-overview.module.css';

export default function CompanyOverview() {
  return <div className={classes['company-overview']}>
    <CompanyDescription />
    <CompanySummary />
    <h3>Cubespace Team</h3>
    <TeamMemberList />
  </div>
}
