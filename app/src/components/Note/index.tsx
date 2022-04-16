import React, { useState, useCallback } from "react";
import { NoteModel } from "../../models";

import styles from "./note.module.css";

type Props = {
    id: string;
    title: string;
    content: string;
    onUpdateNote: (note: NoteModel) => void;
    onDeleteNote: (note: NoteModel) => void;
}

export default function Note({ id, title, content, onUpdateNote, onDeleteNote }: Props) {
    const [note, setNote] = useState<NoteModel>({ id, title, content });

    const onNoteFormChange = useCallback((event: React.FormEvent) => {
        event.preventDefault();

        onUpdateNote(note);
    }, []);

    const handleInputChange = useCallback((event: React.FormEvent) => {
        const name = (event.target as any).name;
        const value = (event.target as any).value;
        
        setNote({
            ...note,
            [name]: value
        });
    }, []);

    const deleteNote = useCallback(() => onDeleteNote(note), []);

    return (
        <article className={styles.Note}>
            <button onClick={deleteNote} className={styles.delBtn}>X</button>
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