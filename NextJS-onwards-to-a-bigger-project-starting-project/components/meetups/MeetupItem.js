import Card from '../ui/Card';
import classes from './MeetupItem.module.css';
import { useRouter } from 'next/router';
// import Link from 'next/link';
function MeetupItem(props) {
  const router=useRouter()
  const showDetailsHandler= ()=>{
    router .push('/'+props.title+"-"+props.id)
  }
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
        </div>
        <div className={classes.actions}>
         {/* <Link href={props.title+"-"+props.id}><button>Show Details</button></Link> */}
         <button onClick={showDetailsHandler}>Show Details</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
