import Sidenav from "../../shared-components/Sidenav";
import Card from "../../UI/Card";

import classes from '../../../styles/pages/team-members.module.css'
import TeamMemberList from './components/TeamMemberList';
import AddEditTeamMembers from "./components/AddEditTeamMembers";
import DashboardHeader from "../../shared-components/DashboardHeader";

export default function TeamMembers() {
  return <div className="dashboard">
      <Sidenav />
      <div className="dashboard__body">
       <DashboardHeader />
        <div className={classes['team-members']}>
          <AddEditTeamMembers />
            <TeamMemberList />
        </div>
      </div>
  </div>
}
