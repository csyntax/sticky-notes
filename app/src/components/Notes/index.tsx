import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { uniqueId } from "lodash";

import Note from "./Note";

import { INote } from "../../models";
import storage from "../../storage";

import styles from "./notes.module.css";

export default function Notes() {
    const initialNotes = storage.get("notes", []);
    const [notes, setNotes] = useState<INote[]>(initialNotes);

    useEffect(() => storage.set("notes", notes), [notes]);

    const onAddNote = () =>
        setNotes(oldNotes => [
            {
                id: uniqueId(`abc-${Date.now()}-xyz`),
                title: "Empty note title",
                content: "Empty note content",
                date: Date.now().toString(),
            },
            ...oldNotes
        ]);

    const onUpdateNote = (note: INote) => setNotes(oldNotes => oldNotes.map(n => n.id === note.id ? note : n));

    const onDeleteNote = (note: INote) => setNotes(oldNotes => oldNotes.filter(n => n.id !== note.id));

    const onClearNotes = () => setNotes([]);

    return (
        <div className={styles.notes}>
            {notes.map(note =>
                <Note
                    {...note}
                    key={note.id}
                    onUpdateNote={onUpdateNote}
                    onDeleteNote={onDeleteNote}
                />
            )}
            <nav className={styles.nav}>
                <div>
                    <button onClick={onAddNote} className={styles.btn}>
                        <FontAwesomeIcon icon={faPlus} />
                    </button>
                    <button onClick={onClearNotes} className={styles.btn}>
                        <FontAwesomeIcon icon={faTrash} />
                    </button>
                </div>
            </nav>
        </div>
    );
}