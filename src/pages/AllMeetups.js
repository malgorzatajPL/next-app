import MeetupList from '../components/meetups/MeetupList';
import { useState, useEffect } from 'react';

function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setloadedMeetups] = useState([]);
  useEffect(() => {
    fetch(
      'https://test-62168-default-rtdb.europe-west1.firebasedatabase.app/meetups.json'
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetups = [];
        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };
          meetups.push(meetup);
        }
        setIsLoading(false);
        setloadedMeetups(meetups);
        console.log(loadedMeetups);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <h1>loading</h1>
      </section>
    );
  }

  return (
    <div>
      <h1>AllMeetupsPage</h1>
      <MeetupList meetups={loadedMeetups} />
    </div>
  );
}
export default AllMeetupsPage;
