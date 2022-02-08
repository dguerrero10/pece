import { AttachMoney, Business, Edit, Group, Message, Person, Style, Visibility } from '@material-ui/icons';
import { Divider } from '@mui/material';
import Link from 'next/link';

import classes from '../../styles/shared-components/sidenav.module.css';

export default function Sidenav() {
    return <nav className={classes['sidenav']}>
        <div className={classes['sidenav__list']}>
            <h3 className={classes['sidenav__header']}>Menu</h3>
            <Link href="company">
                <div className={classes['sidenav__list--item']}>
                    <Business /> <p className={classes['sidenav__list--text']}>Company</p>
                </div>
            </Link>
            <Link href="team-members">
                <div className={classes['sidenav__list--item']}>
                    <Group /> <p className={classes['sidenav__list--text']}>Team members</p>
                </div>
            </Link>
             {/* <Link href="company-watchlist">
                <div className={classes['sidenav__list--item']}>
                    <Visibility /> <p className={classes['sidenav__list--text']}>Company watchlist</p>
                </div>
            </Link> */}
            <Link href="investors">
                <div className={classes['sidenav__list--item']}>
                    <AttachMoney /> <p className={classes['sidenav__list--text']}>Investors</p>
                </div>
            </Link>
            <Divider variant="left" style={{ background: 'rgb(221, 219, 219)' }}/>
            <Link href="messages">
                <div className={classes['sidenav__list--item']}>
                    <Message /> <p className={classes['sidenav__list--text']}>Messages</p>
                </div>
            </Link>
            <Link href="profile">
                <div className={classes['sidenav__list--item']}>
                    <Person /> <p className={classes['sidenav__list--text']}>Profile</p>
                </div>
            </Link>
        </div>
    </nav>
}
