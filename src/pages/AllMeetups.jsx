import { MeetupList } from '../components/MeetupList';
import { DUMMY_DATA } from '../data';

export const AllMeetupsPage = () => {
    return (
        <div>
            <h1>All Meetups</h1>
            <MeetupList meetups={DUMMY_DATA} />
        </div>
    );
};
