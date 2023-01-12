import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

import { INote } from "../../models";

import styles from "./note.module.css";

type NoteProps = {
    note: INote;
    onUpdateNote: (note: INote) => void;
    onDeleteNote: (note: INote) => void;
}

export default function Note({ note, onUpdateNote, onDeleteNote }: NoteProps) {
    const onInputChange = React.useCallback((event: any) => {
        const name = event.target.name;
        const value = event.target.value;

        onUpdateNote({ 
            ...note,
            [name]: value,
        });
    }, [note, onUpdateNote]);

    return (
        <div className={styles.note}>
            <button onClick={() => onDeleteNote(note)} className={styles.btn}>
                <FontAwesomeIcon icon={faClose} />
            </button>
 
            <input className={styles.title} name="title" value={note.title} onChange={onInputChange} />
            <textarea className={styles.content} name="content" value={note.content} onChange={onInputChange}/>
        </div>
    );
}