import {
    List,
    ListItem,
    Divider,
    ListItemText,
    ListItemAvatar,
    Avatar,
    Typography
} from '@mui/material';
import { Fragment } from 'react';

export default function MessagePeopleList() {
    return <List sx={{ width: '100%', 
                       minWidth: 360, 
                       borderRight: '1px solid rgb(221, 219, 219)', 
                       bgcolor: 'background.paper' }}>
        <ListItem alignItems="flex-start">
            <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="/assets/images/girl.jpg" />
            </ListItemAvatar>
            <ListItemText
                primary="Ali Connors"
                secondary={
                    <Fragment>
                        <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                        >
                        </Typography>
                        {"Hi, I'm interested in setting up a conversation..."}
                    </Fragment>
                }
            />
        </ListItem>
        <Divider variant="inset" component="li" />
    </List>;
}
