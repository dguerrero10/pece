import { Avatar } from '@mui/material';
import Button from '../../../UI/Button';
import SecondaryButton from '../../../UI/SecondaryButton';
import classes from '../../../../styles/components/dashboard/profile/profile-picture-row.module.css';

export default function ProfilePictureRow() {
  return <div className={classes['profile-picture-row']}>
    <div className={classes['profile-picture-row__wrapper']}>
      <Avatar src='/assets/images/guy.jpg' sx={{ width: 140, height: 140 }} />
      <div className={classes['profile-picture-row__text']}>
        <h2>Profile</h2>
        <p className='para'>Update your photo and personal deatails</p>
      </div>
    </div>
    <div className={classes['profile-picture-row__actions']}>
      <SecondaryButton>Cancel</SecondaryButton>
      <Button>Save</Button>
    </div>
  </div>
}
