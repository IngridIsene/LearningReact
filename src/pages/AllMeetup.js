import { useState, useEffect } from 'react'; //useEffect is a hook that lets you run your code under certain conditions
import MeetupList from '../components/meetups/MeetupList';


export function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch('https://react-getting-started-8a614-default-rtdb.firebaseio.com/meetups.json'
    ).then(response => {
      return response.json();
    }).then (data => {
      setIsLoading(false);
      setLoadedMeetups(data);
    });

  }, []);

  if (isLoading) {
    return <section>
      <p>Loading..</p>
    </section>
  }


    return (
        <section>
            <h1>All meetups</h1>
            <MeetupList meetups={loadedMeetups}/>
        </section>
       
    )
}

export default AllMeetupsPage;