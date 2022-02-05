import Sidenav from "../../shared-components/Sidenav";
import Card from "../../UI/Card";
import AddPitchDeckContainer from "./components/AddPitchDeckContainer";

import classes from '../../../styles/pages/pitch-deck.module.css'

export default function PitchDeck() {
  return <div className="dashboard">
      <Sidenav />
      <div className="dashboard__body">
        <Card>
          <div className="dashboard__text-container">
            <h2 >Welcome, Dave.</h2>
            <p className="para">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          </div>
        </Card>
        <div className={classes['pitch-deck']}>
          <AddPitchDeckContainer />
        </div>
      </div>
  </div>
}
