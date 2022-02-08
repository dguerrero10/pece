import classes from '../../../../styles/components/dashboard/company-watchlist/watchlist.module.css';
import WatchlistItem from './WatchlistItem';

export default function Watchlist() {
  return <div className={classes['watchlist']}>
    <WatchlistItem />
  </div>;
}