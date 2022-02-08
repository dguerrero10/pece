import { Divider } from '@mui/material';
import classes from '../../../../styles/components/dashboard/company/asks.module.css';

export default function Asks() {
  return <div className={classes['asks']}>
    <h1>What We're Asking </h1>
    <div className={classes["asks__section"]}>
      <h2>Overview</h2>
      <div className={classes['asks__section--wrapper']}>
        <p className='para'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
          Incidunt at, molestias aliquid, 
          ut voluptatem quia ducimus harum rerum deleniti asperiores adipisci deserunt quaerat a. 
          Animi saepe distinctio architecto, 
          consequatur totam voluptatem explicabo omnis rerum quisquam ratione nemo 
          ab fugit laudantium praesentium tenetur exercitationem odit tempora, minus consequuntur harum aut.
          Incidunt at, molestias aliquid, 
          ut voluptatem quia ducimus harum rerum deleniti asperiores adipisci deserunt quaerat a. 
          Animi saepe distinctio architecto, 
          consequatur totam voluptatem explicabo omnis rerum quisquam ratione nemo 
          ab fugit laudantium praesentium tenetur exercitationem odit tempora, minus consequuntur harum aut.
        </p>
      </div>
    </div>
    <Divider variant="left" style={{ background: 'rgb(221, 219, 219)' }} />

    <div className={classes["asks__section"]}>
    <h2>Why us?</h2>
      <div className={classes['asks__section--wrapper']}>
        <p className='para'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
          Incidunt at, molestias aliquid, 
          ut voluptatem quia ducimus harum rerum deleniti asperiores adipisci deserunt quaerat a. 
          Animi saepe distinctio architecto, 
          consequatur totam voluptatem explicabo omnis rerum quisquam ratione nemo 
          ab fugit laudantium praesentium tenetur exercitationem odit tempora, minus consequuntur harum aut.
          Incidunt at, molestias aliquid, 
          ut voluptatem quia ducimus harum rerum deleniti asperiores adipisci deserunt quaerat a. 
          Animi saepe distinctio architecto, 
          consequatur totam voluptatem explicabo omnis rerum quisquam ratione nemo 
          ab fugit laudantium praesentium tenetur exercitationem odit tempora, minus consequuntur harum aut.
        </p>
      </div>
    </div>
  </div>
}
