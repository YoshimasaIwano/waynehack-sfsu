import React from 'react';
import { Button } from 'react-bootstrap';

export type TextInputProps = {
    value: string;
    placeholder: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

export const TextInput = ({ value, placeholder, onChange, onSubmit }: TextInputProps) => {
    return (
        <div className="form-group text-right">
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    className="form-control"
                    placeholder={placeholder}
                    onChange={onChange}
                    value={value}
                />
            </form>
            <Button variant="primary" type="submit">
                Order
            </Button>
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
