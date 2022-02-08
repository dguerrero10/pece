import {
    List,
    ListItem,
    ListItemText,
    ListItemAvatar,
    Avatar,
    Stack,
    Chip
} from '@mui/material';
import { BeachAccess, Group, Language, LocalAtm, LocationOn, Storefront } from '@material-ui/icons';

export default function CompanyDetails() {
    return (
        <List sx={{
            width: '100%', maxWidth: '340px',
            bgcolor: 'background.paper',
            borderRadius: '6px',
            padding: '0 1rem',
            boxShadow: 'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;'
        }}>
            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                        <Language />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Website" secondary={<a>Test</a>} />
            </ListItem>
            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                        <LocationOn />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Locations" secondary="Jan 7, 2014" />
            </ListItem>
            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                        <LocalAtm />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Total Raised" secondary="July 20, 2014" />
            </ListItem>
            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                        <Group />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Company Size" secondary="July 20, 2014" />
            </ListItem>
            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                        <Storefront />
                    </Avatar>
                </ListItemAvatar>
                {/* <ListItemText primary="Markets" /> */}
                {/* <Stack direction="row" spacing={1}>
                        <Chip label="Chip Filled" />
                        <Chip label="Chip Filled" />
                        <Chip label="Chip Filled" />
                        <Chip label="Chip Filled" />
                        <Chip label="Chip Filled" />
             
                    </Stack> */}

            </ListItem>
        </List>
    );
}
