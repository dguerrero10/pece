import classes from '../../styles/UI/card.module.css';

export default function Card(props) {
  return <div className={classes.card}>
            {props.children}
        </div>
}
