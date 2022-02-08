import { Avatar } from "@mui/material";

import classes from '../../../../../styles/components/dashboard/company/company-description.module.css';

export default function CompanyDescription() {
  return <div className={classes['company-desc']}>
        <Avatar src="/assets/dummy-logos/logo-2.png"
                    sx={{width: 80, 
                    height: 80, 
                    alignSelf: 'flex-start',
                    marginRight: '1.5rem'}} />
        <div className={classes["company-desc__text"]}>
            <h3 className={classes["company-desc__name"]}>Cubespace</h3>
            <p className="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur veniam nesciunt dolore alias, deleniti cum.</p>
            <p className={classes['company-desc__emps']}>10-30 employees</p>
        </div>
  </div>
}
