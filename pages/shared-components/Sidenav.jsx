import { Business, Edit, Group, Message, Style } from '@material-ui/icons';
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
            <Link href="pitch-deck">
                <div className={classes['sidenav__list--item']}>
                    <Style /> <p className={classes['sidenav__list--text']}>Pitch deck</p>
                </div>
            </Link>
            <Divider variant="middle" style={{ background: 'rgb(221, 219, 219)' }}/>
            <Link href="interests">
                <div className={classes['sidenav__list--item']}>
                    <Edit /> <p className={classes['sidenav__list--text']}>Interests</p>
                </div>
            </Link>
            <Link href="messages">
                <div className={classes['sidenav__list--item']}>
                    <Message /> <p className={classes['sidenav__list--text']}>Messages</p>
                </div>
            </Link>
        </div>
    </nav>
}
