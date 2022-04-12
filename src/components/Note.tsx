import React, { FormEvent, useCallback, useState } from "react";

import styles from "./note.module.css";

type Props = {
    title: string,
    content: string;
}

export default function Note({ title, content }: Props) {
    const [note, setNote] = useState({ title, content });

    function onChange(event: FormEvent) {
        event.preventDefault();
    }
    
    return (
        <article className={styles.Note}>
            <form onChange={onChange}>
                <div>
                    <input type="text" defaultValue={note.title} className={styles.NoteTitle} />
                </div>
                <div>
                    <textarea defaultValue={note.content} className={styles.NoteContent}></textarea>
                </div>
            </form>
        </article>
    );
}