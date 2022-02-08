import { Edit } from '@material-ui/icons';
import { IconButton, Tooltip } from '@mui/material';
import classes from '../../../../styles/components/dashboard/company-watchlist/edit-watchlist.module.css';
import { useState } from 'react';

export default function EditWatchlist() {
  const [isEditing, setIsEditing] = useState(false);

  return <div className={classes['edit-watchlist']}>
    <Tooltip title="Edit watchlist" placement='left'>
      <IconButton>
        <Edit />
      </IconButton>
    </Tooltip>
  </div>
}
