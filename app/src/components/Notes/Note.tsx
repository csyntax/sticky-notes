import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

import { INote } from "../../models";

import styles from "./note.module.css";

type NoteProps = {
    id: string;
    date: string;
    title: string;
    content: string;
    onUpdateNote: (note: INote) => void;
    onDeleteNote: (note: INote) => void;
}

export default function Note({ id, title, content, date, onUpdateNote, onDeleteNote }: NoteProps) {
    const [note, setNote] = useState<INote>({ id, title, content, date });

    useEffect(() => onUpdateNote(note), [note]);

    const onInputChange = (event: React.FormEvent) => {
        const name = (event.target as any).name;
        const value = (event.target as any).value;

        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value,
            };
        });
    };

    return (
        <article className={styles.note}>
            <button  onClick={() => onDeleteNote(note)} className={styles.btn}>
                <FontAwesomeIcon icon={faClose} />
            </button>
 
            <input className={styles.title} name="title" value={note.title} onChange={onInputChange} />
            <textarea className={styles.content} name="content" value={note.content} onChange={onInputChange}/>
        </article>
    );
}