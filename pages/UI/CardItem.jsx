import classes from '../../styles/UI/card-item.module.css';

export default function CardItem(props) {
  return <div className={classes['card-item']}>
      {props.children}
  </div>
}
