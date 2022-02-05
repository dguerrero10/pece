import classes from '../../styles/UI/team-member-card.module.css';

export default function TeamMemberCard(props) {
  return <div className={classes['team-member-card']}>
      {props.children}
  </div>;
}
