import { useRef } from 'react';
import { Card } from './ui/Card';
import { CardBody } from './ui/CardBody';
import { FormInput } from './ui/FormInput';

export const MeetupForm = () => {
    const titleInput = useRef();
    const imageInput = useRef();
    const addressInput = useRef();
    const descriptionInput = useRef();

    const submitHandler = (e) => {
        e.preventDefault();

        const formData = {
            title: titleInput.current.value,
            image: imageInput.current.value,
            address: addressInput.current.value,
            description: descriptionInput.current.value,
        };

        console.log(formData);
    };

    return (
        <Card>
            <CardBody>
                <form onSubmit={submitHandler}>
                    <FormInput
                        id="title"
                        label="Title"
                        required
                        // note: ref should be innerRef for custom components
                        innerRef={titleInput}
                    />

                    <FormInput
                        id="image"
                        label="Image"
                        type="url"
                        required
                        innerRef={imageInput}
                    />

                    <FormInput
                        id="address"
                        label="Address"
                        required
                        innerRef={addressInput}
                    />
                    <FormInput
                        id="description"
                        label="Description"
                        type="textarea"
                        required
                        innerRef={descriptionInput}
                    />
                    <button className="btn btn-primary">Add Meetup</button>
                </form>
            </CardBody>
        </Card>
    );
};
