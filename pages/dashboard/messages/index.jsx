import Sidenav from "../../shared-components/Sidenav";
import classes from '../../../styles/pages/messages.module.css';
import MessagePeopleList from "./components/MessagePeopleList";

export default function Messages() {
  return <div className="dashboard">
      <Sidenav />
            <div className={classes['msg-grid']}>
            <MessagePeopleList />
      </div>
  </div>
}
