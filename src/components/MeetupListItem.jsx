import { Card } from './ui/Card';
import { CardBody } from './ui/CardBody';

export const MeetupListItem = ({ meetup }) => {
    return (
        <Card>
            <img
                src={meetup.image}
                className="card-img-top"
                style={{ height: '250px', objectFit: 'cover' }}
                alt={meetup.title}
            />
            <CardBody>
                <h5 className="card-title">{meetup.title}</h5>
                <p className="card-text">{meetup.description}</p>
            </CardBody>
        </Card>
    );
};
