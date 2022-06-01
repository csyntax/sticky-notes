import React, { useId } from "react";

import styles from "./input.module.css";

type TextInputProps = {
    name: string;
    value: any;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export const TextInput = (props: TextInputProps) => {
    const id = useId();

    return (
        <>
            <label htmlFor={id} className={styles.Label}>{props.name}</label>
            <input id={id} type="text" {...props} className={styles.Input} />
        </>
    );
};

type TextAreaProps = {
    name: string;
    value: any;
    onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
}

export const TextArea = (props: TextAreaProps) => {
    const id = useId();

    return (
        <>
            <label htmlFor={id} className={styles.Label}>{props.name}</label>
            <textarea id={id} {...props} className={styles.Input} />
        </>
    );
};