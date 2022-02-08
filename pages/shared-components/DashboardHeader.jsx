import Card from '../UI/Card';
import { Notifications } from "@material-ui/icons";
import { IconButton } from "@mui/material";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function DashboardHeader() {
    const [text, setText] = useState({
        header: '',
        para: ''
    });

    const router = useRouter();

    useEffect(() => {
        let currentPath = router.pathname.split('/').pop();
        if (currentPath === 'team-members') {
            setText(prevState => ({
                ...prevState,
                header: 'Manage your team',
                para: 'Team work makes the dream work. 🤝'
            }))
        }
        else if (currentPath === 'company') {
            setText(prevState => ({
                ...prevState,
                header: 'Hi, Dave!',
                para: `Let's turn your company into the next unicorn. 🦄`
            }))
        }
        return () => setText(prevState => ({
            ...prevState,
            header: '',
            para: ''
        }))
    },[])

    return <Card>
        <div className="dashboard__text-container">
            <div className="flx-space-between">
                <h2>{text.header}</h2>
                <IconButton aria-label="notification"
                    size="large">
                    <Notifications fontSize="inherit" />
                </IconButton>
            </div>
            <p className="para">{text.para}</p>
        </div>
    </Card>
}
