import React, { useId } from "react";

type TextInputProps = {
    name: string;
    value: any;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    className: string;
}

export const TextInput = React.forwardRef((props: TextInputProps, ref: any) => {
    const id = useId();

    return (
        <>
            <label htmlFor={id}>{props.name}</label>
            <input id={id} type="text" ref={ref} {...props} />
        </>
    );
});

type TextAreaProps = {
    name: string;
    value: any;
    onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
    className: string;
}

export const TextArea = React.forwardRef((props: TextAreaProps, ref: any) => {
    const id = useId();

    return (
        <>
            <label htmlFor={id}>{props.name}</label>
            <textarea id={id} ref={ref} {...props} />
        </>
    );
});