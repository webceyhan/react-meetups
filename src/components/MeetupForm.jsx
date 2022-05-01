import { Card } from './ui/Card';
import { CardBody } from './ui/CardBody';
import { FormInput } from './ui/FormInput';

export const MeetupForm = () => {
    return (
        <Card>
            <CardBody>
                <form>
                    <FormInput name="title" label="Title" required />
                    <FormInput name="image" label="Image" type="url" required />
                    <FormInput name="address" label="Address" required />
                    <FormInput
                        name="description"
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
