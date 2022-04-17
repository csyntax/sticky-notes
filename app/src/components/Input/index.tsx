import React from "react";

type TextInputProps = {
    name: string;
    value: any;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    className: string;
}

export const TextInput = React.forwardRef((props: TextInputProps, ref: any) => {
    return <input type="text" ref={ref} {...props} />
});

type TextAreaProps = {
    name: string;
    value: any;
    onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
    className: string;
}

export const TextArea = React.forwardRef((props: TextAreaProps, ref: any) => {
    return <textarea ref={ref} {...props} />
});