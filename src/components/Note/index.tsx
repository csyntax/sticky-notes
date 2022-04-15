import React, { useState, useCallback } from "react";
import { NoteModel } from "../../models";

import styles from "./note.module.css";

type Props = {
    id: string;
    title: string,
    content: string;
    onChangeNote: (note: NoteModel) => void;
}

export default function Note({ id, title, content, onChangeNote }: Props) {
    const [note, setNote] = useState<NoteModel>({ id, title, content });

    const onNoteFormChange = useCallback((event: React.FormEvent) => {
        event.preventDefault();

        onChangeNote(note);
    }, [note]);

    const handleInputChange = useCallback((event: React.FormEvent) => {
        const name = (event.target as any).name;
        const value = (event.target as any).value;
        
        setNote({
            ...note,
            [name]: value
        });
    }, [note]);

    return (
        <article className={styles.Note}>
            <form onChange={onNoteFormChange}>
                <div>
                    <input type="text" name="title" value={note.title} onChange={handleInputChange} className={styles.NoteTitle} />
                </div>
                <div>
                    <textarea name="content" value={note.content} onChange={handleInputChange} className={styles.NoteContent} />
                </div>
            </form>
        </article>
    );
}