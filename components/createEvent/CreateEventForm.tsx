'use client';
import { useState } from "react";

import TextInputField from './TextInputField';
import TextareaField from './TextareaField'
import type { EventFormValues } from './types';

const initialValues: EventFormValues = {
    title: '',
    description: '',
    overview: '',
    venue: '',
    location: '',
    date: '',
    time: '',
    mode: 'online',
    audience: '',
    organizer: '',
    tags: '',
    agenda: '',
    image: null,
}
type FieldErrors = Partial<Record<keyof EventFormValues, string>>;

const CreateEventForm = () => {
    const [formValues, setFormValues] = useState<EventFormValues>(initialValues);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const name = e.target.name as keyof EventFormValues;
        const value = e.target.value;
        // Update the form state
        setFormValues((prev) => ({
            ...prev,
            [name]: value
        }));
        // Clear the error for that field if it had one
        if (fieldErrors[name]) {
            setFieldErrors((prev) => ({
                ...prev,
                [name]: ''
            }));
        }
    }

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] ?? null;
        setFormValues((prev) => ({ ...prev, image: file }));
        if (fieldErrors.image) {
            setFieldErrors((prev) => ({ ...prev, image: '' }));
        }
    }

    const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();

        const errors: FieldErrors = {};
        if (!formValues.title.trim()) errors.title = 'Title is required.';
        if (!formValues.description.trim()) errors.description = 'Description is required.';
        if (!formValues.overview.trim()) errors.overview = 'Overview is required.';
        if (!formValues.image) errors.image = 'Image is required.';
        if (!formValues.venue.trim()) errors.venue = 'Venue is required.';
        if (!formValues.location.trim()) errors.location = 'Location is required.';
        if (!formValues.date) errors.date = 'Date is required.';
        if (!formValues.time) errors.time = 'Time is required.';
        if (!formValues.audience.trim()) errors.audience = 'Audience is required.';
        if (!formValues.tags.trim()) errors.tags = 'Tags are required.';
        if (!formValues.agenda.trim()) errors.agenda = 'Agenda is required.';

        // Returns an array of error's keys. If there are any errors, set them in state and return early. 
        if (Object.keys(errors).length > 0) {
            setFieldErrors(errors);
            return;
        }
        setFieldErrors({});

        setIsSubmitting(true);
        try {
            // API call in next step
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="create-event-card">
            <form id="create-event-form" onSubmit={handleSubmit} noValidate>
                <TextInputField
                    label="Title"
                    id="title"
                    value={formValues.title}
                    error={fieldErrors.title}
                    onChange={handleChange}
                />
                <TextareaField
                    label="Description"
                    id="description"
                    value={formValues.description}
                    error={fieldErrors.description}
                    onChange={handleChange}
                />
                <TextareaField
                    label="Overview"
                    id="overview"
                    value={formValues.overview}
                    error={fieldErrors.overview}
                    onChange={handleChange}
                />
                <div className="form-field">
                    <label htmlFor="image" className="required-field">Image</label>
                    <input type="file" id="image" accept="image/*" required onChange={handleImageChange} />
                    {fieldErrors.image && <p className="field-error">{fieldErrors.image}</p>}
                </div>
                <TextInputField
                    label="Venue"
                    id="venue"
                    value={formValues.venue}
                    error={fieldErrors.venue}
                    onChange={handleChange}
                />
                <TextInputField
                    label="Location"
                    id="location"
                    value={formValues.location}
                    error={fieldErrors.location}
                    onChange={handleChange}
                />
                <div className="form-row">
                    <TextInputField
                        label="Date"
                        id="date"
                        type="date"
                        value={formValues.date}
                        error={fieldErrors.date}
                        onChange={handleChange}
                    />
                    <TextInputField
                        label="Time"
                        id="time"
                        type="time"
                        value={formValues.time}
                        error={fieldErrors.time}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-field">
                    <label htmlFor="mode" className="required-field">Mode</label>
                    <select name="mode" id="mode" required value={formValues.mode} onChange={handleChange}>
                        <option value="online">Online</option>
                        <option value="offline">Offline</option>
                        <option value="hybrid">Hybrid</option>
                    </select>
                </div>
                <TextInputField
                    label="Audience"
                    id="audience"
                    value={formValues.audience}
                    error={fieldErrors.audience}
                    onChange={handleChange}
                />
                <TextInputField
                    label="Tags"
                    id="tags"
                    value={formValues.tags}
                    error={fieldErrors.tags}
                    onChange={handleChange}
                />
                <TextareaField
                    label="Agenda"
                    id="agenda"
                    value={formValues.agenda}
                    error={fieldErrors.agenda}
                    onChange={handleChange}
                />
                <button
                    type="submit"
                    className="button-submit"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? 'Creating...' : 'Create Event'}
                </button>
            </form>
        </div>
    )
}

export default CreateEventForm