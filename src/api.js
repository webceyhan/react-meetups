const API_URL =
    'https://react-meetups-729a4-default-rtdb.europe-west1.firebasedatabase.app/meetups.json';

export const createMeetup = async (meetup) => {
    const response = await fetch(API_URL, {
        method: 'POST',
        body: JSON.stringify(meetup),
    });

    return response.json();
};

export const getMeetups = async () => {
    const response = await fetch(API_URL);

    return response.json();
};
