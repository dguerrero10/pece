import CardItem from "../../../UI/CardItem";
import { Avatar } from '@mui/material';

import classes from '../../../../styles/components/dashboard/company-watchlist/watchlist-item.module.css';
import { Fragment } from "react";

export default function WatchlistItem(props) {
  return <Fragment>
    <CardItem cursor={true}>
      <Avatar sx={{ width: 90, height: 90 }}
        alt="Remy Sharp"
        src="/assets/dummy-logos/logo-1.png" />
      <h4 className={classes["watchlist__name"]}>RamenToGo</h4>
      <p className={classes['watchlist__role']}>Fast food industry disrupter</p>
    </CardItem>
    <CardItem>
      <Avatar sx={{ width: 90, height: 90 }}
        alt="Remy Sharp"
        src="/assets/dummy-logos/logo-2.png" />
      <h4 className={classes["watchlist__name"]}>Cubespace</h4>
      <p className={classes['watchlist__role']}>Squarespace, but better</p>
    </CardItem>
  </Fragment>

}