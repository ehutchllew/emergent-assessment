import { useState } from "react";

interface IFormProps {
    buttonLabel?: string;
    name?: string;
    onSubmitForm(value: string): void;
    placeholder?: string;
}

const defaultProps: Partial<IFormProps> = {
    buttonLabel: "Let's Go",
    placeholder: "Search...",
};

export function Form(props: IFormProps) {
    const [inputValue, setInputValue] = useState("");

    function onChangeText(event: React.ChangeEvent<HTMLInputElement>) {
        const value = event.target.value;
        setInputValue(value);
    }

    function onFormSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        props.onSubmitForm(inputValue);
    }
    return (
        <form className="App-form" onSubmit={onFormSubmit}>
            <input
                className="App-input"
                id="search"
                name="search"
                onChange={onChangeText}
                placeholder={props.placeholder}
                value={inputValue}
            />
            <button type="submit" className="App-button">
                {props.buttonLabel}
            </button>
        </form>
    );
}

Form.defaultProps = defaultProps;
