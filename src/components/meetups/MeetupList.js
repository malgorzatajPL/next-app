import MeetupItem from './MeetupItem';
import classes from './MeetupList.module.css';

function MeetupList(props) {
  console.log(props);
  return (
    <ul className={classes.list}>
      {props.meetups.map((meetup) => (
        <MeetupItem
          id={meetup.id}
          key={meetup.id}
          email={meetup.email}
          image={meetup.image}
          name={meetup.name}
          last_name={meetup.last_name}
        />
      ))}
    </ul>
  );
}
export default MeetupList;
