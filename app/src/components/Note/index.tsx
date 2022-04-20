import React, { useState, useCallback } from "react";
import { faClose } from "@fortawesome/free-solid-svg-icons";

import { NoteModel } from "../../models";
import { IconButton } from "../Button";
import { TextInput, TextArea } from "../Input";

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

    const handleInputChange = useCallback((event: React.FormEvent) => {
        const name = (event.target as any).name;
        const value = (event.target as any).value;

        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value,
            };
        });
    }, []);

    return (
        <article className={styles.Note}>
            <IconButton onClick={() => onDeleteNote(note)} className={styles.delBtn} icon={faClose} />
            <form onChange={() => onUpdateNote(note)}>
                <div>
                    <TextInput name="title" value={note.title} onChange={handleInputChange} className={styles.NoteTitle} />
                </div>
                <div>
                    <TextArea name="content" value={note.content} onChange={handleInputChange} className={styles.NoteContent} />
                </div>
            </form>
        </article>
    );
}