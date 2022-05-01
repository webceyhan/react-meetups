import { MeetupListItem } from './MeetupListItem';

export const MeetupList = ({ meetups }) => {
    return (
        <ul>
            {meetups.map((meetup) => (
                <MeetupListItem key={meetup.id} meetup={meetup} />
            ))}
        </ul>
    );
};
