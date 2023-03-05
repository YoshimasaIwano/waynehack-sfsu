import React from 'react';
import { Button } from 'react-bootstrap';

interface TextInputProps {
    value: string;
    placeholder: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TextInput = ({ value, placeholder, onChange }: TextInputProps) => {
    return (
        <div className="form-group w-100">
            <form>
                <input
                    type="text"
                    className="form-control rounded-left text-center w-100 rounded"
                    placeholder={placeholder}
                    onChange={onChange}
                    value={value}
                />
            </form>
        </div>
    );
};
// function TextInput(props: { label: string, value: string, onChange: (event: React.ChangeEvent<HTMLInputElement>) => void, placeholder: string, onSubmit: () => void }) {
//     const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
//         if (event.key === 'Enter') {
//             props.onSubmit();
//         }
//     }

//     return (
//         <div className="mt-2">
//             <label>{props.label}</label>
//             <input type="text" value={props.value} onChange={props.onChange} placeholder={props.placeholder} onKeyPress={handleKeyPress} />
//             <Button variant="primary" type="submit" onClick={props.onSubmit}>
//                 Send
//             </Button>
//         </div>
//     );
// }
export default TextInput;
