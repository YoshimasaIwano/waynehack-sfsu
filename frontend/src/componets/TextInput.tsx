import React from 'react';

interface TextInputProps {
    value: string;
    placeholder: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onKeyDown:  (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

export const TextInput = ({ value, placeholder, onChange , onKeyDown}: TextInputProps) => {
    return (
        <div className="form-group w-100">
            <form>
                <input
                    type="text"
                    className="form-control rounded-left text-center w-100 rounded"
                    placeholder={placeholder}
                    onChange={onChange}
                    onKeyDown={onKeyDown}
                    value={value}
                />
            </form>
        </div>
    );
};

export default TextInput;
