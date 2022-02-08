import CardItem from "../../../UI/CardItem";
import { Avatar } from '@mui/material';

import classes from '../../../../styles/components/dashboard/team-members/team-member-list-item.module.css'
import { Fragment } from "react";

export default function TeamMemberListItem() {
  return <Fragment>
    <CardItem>
      <Avatar sx={{ width: 90, height: 90 }}
        alt="Remy Sharp"
        src="/assets/images/guy.jpg" />
      <h4 className={classes["tm-list-item__name"]}>Zach Mann</h4>
      <p className={classes['tm-list-item__role']}>Senior Frotend Developer</p>
    </CardItem>
    <CardItem>
      <Avatar sx={{ width: 90, height: 90 }}
        alt="Remy Sharp"
        src="/assets/images/girl.jpg" />
      <h4 className={classes["tm-list-item__name"]}>Natasha Evans</h4>
      <p className={classes['tm-list-item__role']}>Marketing Stragetist</p>
    </CardItem>
    <CardItem>
      <Avatar sx={{ width: 90, height: 90 }}
        alt="Remy Sharp"
        src="/assets/images/asian-guy.jpg" />
      <h4 className={classes["tm-list-item__name"]}>Jack Lang</h4>
      <p className={classes['tm-list-item__role']}>Senior Backend Engineer</p>
    </CardItem>
  </Fragment>

}
