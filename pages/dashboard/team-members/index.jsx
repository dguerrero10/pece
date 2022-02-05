import Sidenav from "../../shared-components/Sidenav";
import Card from "../../UI/Card";

import classes from '../../../styles/pages/team-members.module.css'
import TeamMemberList from './components/TeamMemberList';
import AddEditTeamMembers from "./components/AddEditTeamMembers";

export default function TeamMembers() {
  return <div className="dashboard">
      <Sidenav />
      <div className="dashboard__body">
        <Card>
          <div className="dashboard__text-container">
            <h2 >Welcome, Dave.</h2>
            <p className="para">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          </div>
        </Card>
        <div className={classes['team-members']}>
          <AddEditTeamMembers />
            <TeamMemberList />
        </div>
      </div>
  </div>
}
