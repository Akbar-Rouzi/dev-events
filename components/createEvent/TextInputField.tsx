import type { EventFormValues } from "./types";
type TextInputFieldProps = {
    label: string;
    id: keyof EventFormValues;
    value: string;
    error?: string;
    onChange: (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => void;
    type?: React.HTMLInputTypeAttribute;
    placeholder?: string;
};

const TextInputField = ({
    label,
    id,
    value,
    error,
    onChange,
    type = "text",
    placeholder,
}: TextInputFieldProps) => {
    return (
        <div className="form-field">
            <label htmlFor={id} className="required-field">
                {label}
            </label>
            <input
                type={type}
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

export default TextInputField;