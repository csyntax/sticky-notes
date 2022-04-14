import React, { FormEvent, useState } from "react";

import styles from "./note.module.css";

type Props = {
    id: number;
    title: string,
    content: string;
    onChangeNote: (note: any) => void;
}

export default function Note({ id, title, content, onChangeNote }: Props) {
    const [note, setNote] = useState({ id, title, content });

    function onChange(event: FormEvent) {
        event.preventDefault();
        
        onChangeNote(note);
    }

    function handleChange(event: any) {
        const value = (event.target as any).value;
        const name = (event.target as any).name;

        setNote({
            ...note,
            [name]: value
        });
    }

    return (
        <article className={styles.Note}>
            <form onChange={onChange}>
                <div>
                    <input type="text" name="title" value={note.title} onChange={handleChange} className={styles.NoteTitle} />
                </div>
                <div>
                    <textarea name="content" value={note.content} onChange={handleChange} className={styles.NoteContent}></textarea>
                </div>
            </form>
        </article>
    );
}