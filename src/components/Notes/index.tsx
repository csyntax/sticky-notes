import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";

import Note from "./Note";

import { INote } from "../../models";
import storage from "../../storage";

import styles from "./notes.module.css";

export default function Notes() {
    const [notes, setNotes] = React.useState<INote[]>(storage.get("notes", []));

    React.useEffect(() => {
        storage.set("notes", notes);
    }, [notes]);

    const onAddNote = () =>
        setNotes(oldNotes => [
            {
                id: Math.random().toString(16).slice(2),
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
                    key={note.id}
                    note={note}
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