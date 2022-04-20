import React, { useEffect, useId } from "react";
import autosize from "autosize";

import styles from "./input.module.css";

type TextInputProps = {
    name: string;
    value: any;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export const TextInput = React.forwardRef((props: TextInputProps, ref: any) => {
    const id = useId();

    return (
        <>
            <label htmlFor={id} className={styles.Label}>{props.name}</label>
            <input id={id} type="text" ref={ref} {...props} className={styles.Input} />
        </>
    );
});

type TextAreaProps = {
    name: string;
    value: any;
    onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
}

export const TextArea = React.forwardRef((props: TextAreaProps, ref: any) => {
    const id = useId();

    useEffect(() => {
        autosize(ref.current);
    });

    return (
        <>
            <label htmlFor={id} className={styles.Label}>{props.name}</label>
            <textarea id={id} ref={ref} {...props} className={styles.Input} />
        </>
    );
});