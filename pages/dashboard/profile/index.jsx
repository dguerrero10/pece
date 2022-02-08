import { Divider, Stack, TextField } from '@mui/material';
import classes from '../../../styles/pages/profile.module.css';

import Sidenav from "../../shared-components/Sidenav";
import ProfilePictureRow from './components/ProfilePictureRow';
import SecondaryButton from '../../UI/SecondaryButton';

export default function Messages() {
  return <div className="dashboard">
    <Sidenav />
    <div className={classes['profile-info']}>
      <ProfilePictureRow />
      <div className={classes['profile-info__form--wrapper']}>
        <form>
          <Stack direction="column" spacing={5}>
            <div className="flx-space-between">
              <p className='para'>Name</p>
              <p className='para'>Zach Mann</p>
              {/* <TextField /> */}
            </div>
            <Divider variant="left" style={{ background: 'rgb(221, 219, 219)' }} />
            <div className="flx-space-between">
              <p className='para'>Email</p>
              <p className='para'>ZachMann@gmail.com</p>
              {/* <TextField /> */}
            </div>
            <Divider variant="left" style={{ background: 'rgb(221, 219, 219)' }} />
            <div className="flx-space-between">
              <p className='para'>Position title</p>
              <p className='para'>Senior Frontend Engineer</p>
              {/* <TextField /> */}
            </div>
            <Divider variant="left" style={{ background: 'rgb(221, 219, 219)' }} />
            <div className="flx-space-between">
              <p className='para'>LinkedIn URL</p>
              <a className="link"
                 href="https://www.linkedin.com/in/david-guerrero-322046111/"
                 target="_blank">
                https://www.linkedin.com/in/david-guerrero-322046111/
              </a>
              {/* <TextField /> */}
            </div>
            <Divider variant="left" style={{ background: 'rgb(221, 219, 219)' }} />
            <div className="flx-space-between">
              <SecondaryButton>Change password</SecondaryButton>
            </div>
          </Stack>
        </form>
      </div>
    </div>
  </div>
}
