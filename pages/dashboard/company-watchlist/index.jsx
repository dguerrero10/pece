import '../../../styles/pages/company-watchlist.module.css';

import Sidenav from "../../shared-components/Sidenav";
import Watchlist from '../company-watchlist/components/Watchlist';
import EditWatchlist from '../company-watchlist/components/EditWatchlist';

import classes from '../../../styles/pages/team-members.module.css'
import DashboardHeader from '../../shared-components/DashboardHeader';

export default function TeamMembers() {
  return <div className="dashboard">
      <Sidenav />
      <div className="dashboard__body">
        <DashboardHeader />
        <div className={classes['company-watchlist']}>
          <EditWatchlist />
            <Watchlist />
        </div>
      </div>
  </div>
}
