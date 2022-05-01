export const MeetupListItem = ({ meetup }) => {
    return (
        <div className="card shadow">
            <img
                src={meetup.image}
                className="card-img-top"
                style={{ height: '250px', objectFit: 'cover' }}
                alt={meetup.title}
            />
            <div className="card-body">
                <h5 className="card-title">{meetup.title}</h5>
                <p className="card-text">{meetup.description}</p>
            </div>
        </div>
    );
};
