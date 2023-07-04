import Card from '../ui/Card';
import classes from './MeetupItem.module.css';
function MeetupItem(props) {
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img
            width='150px'
            height='150px'
            src={props.image}
            alt={props.name}
          />
        </div>
        <div className={classes.content}>
          <h3>{props.name}</h3>
          <p>{props.email}</p>
          <p>{props.last_name}</p>
        </div>
        <div className={classes.actions}>
          <button>To favorites</button>
        </div>
      </Card>
    </li>
  );
}
export default MeetupItem;
