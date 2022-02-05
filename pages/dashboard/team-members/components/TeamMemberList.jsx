import classes from '../../../../styles/components/dashboard/team-members/team-member-list.module.css';
import TeamMemberListItem from './TeamMemberListItem';

export default function TeamMemberList() {
  return <div className={classes['team-member-list']}>
    <TeamMemberListItem />
  </div>;
}