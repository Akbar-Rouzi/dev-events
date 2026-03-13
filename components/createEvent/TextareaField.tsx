import type { EventFormValues } from "./types";
type TextareaFieldProps = {
    label: string;
    id: keyof EventFormValues;
    value: string;
    error?: string;
    placeholder?: string;
    onChange: (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => void;
};

const TextareaField = ({
    label,
    id,
    value,
    error,
    placeholder,
    onChange,
}: TextareaFieldProps) => {
    return (
        <div className="form-field">
            <label htmlFor={id} className="required-field">
                {label}
            </label>

            <textarea
                id={id}
                name={id}
                required
                value={value}
                placeholder={placeholder}
                onChange={onChange}
            />

            {error && <p className="field-error">{error}</p>}
        </div>
    );
};

export default TextareaField;