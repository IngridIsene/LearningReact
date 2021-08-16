import { useHistory } from 'react-router-dom'; //sends the user to another page after filling out the html forms 
import NewMeetUpForm from "../components/meetups/NewMeetUpForm";


export function NewMeetupPage() {
    const history  = useHistory();

    function addMeetupHandler(meetupData) {
        // by default, firebase sends a GET request and not POST. We must send a POST request
        fetch('https://react-getting-started-8a614-default-rtdb.firebaseio.com/meetups.json',
        {
            method: 'POST',
            body: JSON.stringify(meetupData),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then (() => {
            history.replace('/');
        }); // default js function, built into javascript. Allows us to send http request. /meetups because it will add a meetup table in the firebase
    }

    return (
        <section>
            <h1>Add New Meetup</h1>
            <NewMeetUpForm onAddMeetup={addMeetupHandler}/>
        </section>
    )
}

export default NewMeetupPage;