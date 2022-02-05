import React, { Fragment } from 'react';

import {
    Dialog,
    TextField,
    Avatar,
    Stack,
    Slide
} from '@mui/material';

import classes from '../../../../../styles/components/dashboard/team-members/modals/add-team-member-form.module.css';

import Button from '../../../../UI/Button';
import SecondaryButton from '../../../../UI/SecondaryButton';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function AddTeamMemberForm({ setOpenModal, openModal }) {

    const handleClose = () => {
        setOpenModal(false);
    };

    return (
        <Fragment>
            <Dialog
                open={openModal}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <h3 className={classes['add-tm-form__title']}>Add Team Member</h3>
                <div className={classes['add-tm-form__wrapper']}>
                    <form className={classes['add-tm-form']}>
                        <Stack spacing={3} direction='column' alignItems='center'>
                            <Avatar sx={{ width: 60, height: 60 }} style={{cursor: 'pointer'}} />
                            <TextField variant='outlined' label='Name' />
                            <TextField variant='outlined' label='Position title' />
                            <TextField variant='outlined' label='Linkedin URL' />
                        </Stack>
                        <div className="flx-space-between u-md-padding-vertical">
                            <SecondaryButton type="button" onClick={handleClose}>Cancel</SecondaryButton>
                            <Button type="submit" onClick={handleClose}>Save</Button>
                        </div>
                    </form>
                </div>
            </Dialog>
        </Fragment>
    );
}