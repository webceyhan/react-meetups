import { Card } from './ui/Card';
import { CardBody } from './ui/CardBody';
import { FormInput } from './ui/FormInput';

export const MeetupForm = () => {
    return (
        <Card>
            <CardBody>
                <form>
                    <FormInput id="title" label="Title" required />
                    <FormInput id="image" label="Image" type="url" required />
                    <FormInput id="address" label="Address" required />
                    <FormInput
                        id="description"
                        label="Description"
                        type="textarea"
                        required
                    />
                    <button className="btn btn-primary">Add Meetup</button>
                </form>
            </CardBody>
        </Card>
    );
};
