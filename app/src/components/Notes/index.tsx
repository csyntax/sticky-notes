import React, { useEffect, useState, useCallback } from "react";
import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { uniqueId } from "lodash";

import Note from "./Note";
import { IconButton } from "../Button";

import { INote } from "../../models";
import storage from "../../storage";

import styles from "./notes.module.css";

const STORAGE_KEY = "NOTES";

export default function Notes() {
    const initialNotes = storage.get(STORAGE_KEY, []);
    const [notes, setNotes] = useState<INote[]>(initialNotes);

    useEffect(() => storage.set(STORAGE_KEY, notes), [notes]);

    const onAddNote = () => {
        let newNote: INote = {
            id: uniqueId(`abc-${Date.now()}-xyz`),
            title: "Empty note title",
            content: "Empty note content",
            date: Date.now().toString(),
        };

        setNotes(oldNotes => [newNote, ...oldNotes]);
    };

    const onUpdateNote = (note: INote) => {
        setNotes(oldNotes => oldNotes.map(n => n.id === note.id ? note : n));
    };

    const onDeleteNote = (note: INote) => {
        setNotes(oldNotes => oldNotes.filter(n => n.id !== note.id));
    };

    return (
        <>
            <header>
                <IconButton onClick={onAddNote} className={styles.AddBtn} icon={faPlus} />
                <IconButton onClick={() => setNotes([])} className={styles.AddBtn} icon={faTrash} />
            </header>
            <main className={styles.Notes}>
                {notes.map(note =>
                    <Note
                        {...note}
                        key={note.id} 
                        onUpdateNote={onUpdateNote}
                        onDeleteNote={onDeleteNote}
                    />
                )}
            </main>
            <footer></footer>
        </>
    );
}