import { MeetupForm } from '../components/MeetupForm';

export const NewMeetupPage = () => {
    const addMeetupHandler = (formData) => {
        console.log(formData);
    };

    return (
        <div>
            <h5>NewMeetup Page</h5>
            <MeetupForm onAddMeetup={addMeetupHandler} />
        </div>
    );
};
