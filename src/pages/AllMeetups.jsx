import { DUMMY_DATA } from '../data';

export const AllMeetupsPage = () => {
    return (
        <div>
            <h1>All Meetups</h1>
            <ul>
                {DUMMY_DATA.map((meetup) => (
                    <li key={meetup.id}>{meetup.title}</li>
                ))}
            </ul>
        </div>
    );
};
