import { createMeetup } from '../api';
import { MeetupForm } from '../components/MeetupForm';

export const NewMeetupPage = () => {
    const addMeetupHandler = (formData) => {
        createMeetup(formData);
    };

    return (
        <div>
            <h5>NewMeetup Page</h5>
            <MeetupForm onAddMeetup={addMeetupHandler} />
        </div>
    );
};
