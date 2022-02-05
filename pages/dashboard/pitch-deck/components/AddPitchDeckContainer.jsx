import { CloudUpload } from '@material-ui/icons';
import classes from '../../../../styles/components/dashboard/pitch-deck/add-pitch-deck-container.module.css';

export default function AddPitchDeckContainer() {
  return <div className={classes['pitch-deck-container']}>
            <CloudUpload style={{ color: '#007FFF' }}/>
            <p className='para'>Upload pitch deck</p>
         </div>
}
