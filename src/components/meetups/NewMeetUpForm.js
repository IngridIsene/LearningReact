import { useRef } from 'react'; // import REFS. 
import Card from '../ui/Card';
import classes from './NewMeetUpForm.module.css';


// To handle the form submussion we got to do two main things: Listen to the form submission, and prevent the browser default (which is that it sends an http request and then the page reloades).
// Also need to read the input values in the form 
export function NewMeetUpForm(props) {

    const titleInputRef = useRef(); //  this execute a ref object.  // Must now read the input values from the form, can use state onChange. But we will use REFS - stands for references. For reading inputs-Refs
    const imageInputRef = useRef();
    const addressInputRef = useRef();
    const descriptonInputRef = useRef();


    function submitHandler (event) {
        event.preventDefault(); // will prevent browser default (reload with http)

        const enteredTitle  = titleInputRef.current.value; // value property holds the currently entered value. 
        const enteredImage = imageInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;
        const entereddescription = descriptonInputRef.current.value;

        const meetupData = { //stores the value input entered 
            title: enteredTitle,
            image: enteredImage, 
            address: enteredAddress, 
            description: entereddescription,
        };

        props.onAddMeetup(meetupData);


    }

    return <Card>
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.control}>
                <label htmlFor='title'>Meetup Title</label>
                <input type='Text' required id='title' ref={titleInputRef}/>
            </div>
            <div className={classes.control}>
                <label htmlFor='image'>Meetup Image</label>
                <input type='url' required id='image' ref={imageInputRef} />
            </div>
            <div className={classes.control}>
                <label htmlFor='address'>Address</label>
                <input type='Text' required id='address' ref={addressInputRef}/>
            </div>
            <div className={classes.control}>
                <label htmlFor='description'>Description</label>
                <textarea id='description' required rows='5' ref={descriptonInputRef}></textarea>
            </div>
            <div className={classes.actions}>
                <button>Add Meetup</button>
            </div>
        </form>
    </Card>
}


export default NewMeetUpForm;