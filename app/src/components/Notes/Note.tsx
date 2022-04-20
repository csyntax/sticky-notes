import React, { useState, useCallback, useRef } from "react";
import { faClose } from "@fortawesome/free-solid-svg-icons";

import { INote } from "../../models";
import { IconButton } from "../Button";
import { TextInput, TextArea } from "../Input";

import styles from "./note.module.css";

type Props = {
    id: string;
    date: string;
    title: string;
    content: string;
    onUpdateNote: (note: INote) => void;
    onDeleteNote: (note: INote) => void;
}

export default function Note({ id, title, content, date, onUpdateNote, onDeleteNote }: Props) {
    const [note, setNote] = useState<INote>({ id, title, content, date });

    const titleRef = useRef(null);
    const contentRef = useRef(null);

    const onInputChange = useCallback((event: React.FormEvent) => {
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
            <form onChange={() => onUpdateNote(note)} onSubmit={e => e.preventDefault()}>
                <div className={styles.NoteTitle}>
                    <TextInput name="title" value={note.title} onChange={onInputChange} ref={titleRef} />
                </div>
                <div className={styles.NoteContent}>
                    <TextArea name="content" value={note.content} onChange={onInputChange} ref={contentRef} />
                </div>
                <span style={{display: "none"}}>{note.date}</span>
            </form>
        </article>
    );
}