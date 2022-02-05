import { Edit } from '@material-ui/icons';
import { IconButton, Tooltip } from '@mui/material';
import Button from '../../../UI/Button';
import classes from '../../../../styles/components/dashboard/team-members/add-edit-team-members.module.css';
import { useState } from 'react';
import AddTeamMemberForm from './modals/AddTeamMemberForm';

export default function AddEditTeamMembers() {
  const [openModal, setOpenModal] = useState(false);

  return <div className={classes['add-edit-tm']}>
    <Button onClick={() => setOpenModal(true)}>Add new team member</Button>
    <Tooltip title="Edit team members" placement='left'>
      <IconButton>
        <Edit />
      </IconButton>
    </Tooltip>
    <AddTeamMemberForm setOpenModal={setOpenModal} openModal={openModal} />
  </div>
}
