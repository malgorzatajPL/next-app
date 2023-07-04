import { useRef } from 'react';
import Card from '../ui/Card';
import classes from './NewMeetupForm.module.css';

function NewMeetupForm() {
  const nameInputRef = useRef();
  const lastNameInputRef = useRef();
  const imageInputRef = useRef();
  const emailInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredLastName = lastNameInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const meetupData = {
      name: enteredName,
      last_name: enteredLastName,
      image: enteredImage,
      email: enteredEmail,
    };
    console.log(meetupData);
  }
  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='name'>Meetup Name</label>
          <input type='text' required id='name' ref={nameInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='last_name'>Meetup Last Name</label>
          <input type='text' required id='last_name' ref={lastNameInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='image'>Meetup Image</label>
          <input type='url' required id='image' ref={imageInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='email'>Meetup Email</label>
          <input type='email' required id='email' ref={emailInputRef} />
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}
export default NewMeetupForm;
