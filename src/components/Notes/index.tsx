import React, { useEffect, useState, useCallback } from "react";

import Note from "../Note";
import storage from "../../storage";
import { NoteModel } from "../../models";

import styles from "./notes.module.css";

const STORAGE_KEY = "NOTES";

export default function Notes() {
    const initialNotes = storage.get(STORAGE_KEY, []);

    const [notes, setNotes] = useState<NoteModel[]>(initialNotes);

    useEffect(() => {
        storage.set(STORAGE_KEY, notes);
    }, [notes]);

    const addEmptyNote = useCallback(() => {
        setNotes(oldNotes => [...oldNotes, new NoteModel("Empty note title", "Empty note content")]);
    }, []);

    const onUpdateNote = useCallback((note: NoteModel) => {
        setNotes(oldNotes => oldNotes.map(n => n.id === note.id ? note : n));
    }, []);

    const onDeleteNote = useCallback((note: NoteModel) => {
        setNotes(oldNotes => oldNotes.filter(n => n.id !== note.id));
    }, []);

    return (
        <>
            <header>
                <button onClick={addEmptyNote} className={styles.AddBtn}>Add empty note</button>
                <button onClick={() => setNotes([])} className={styles.AddBtn}>Clear all notes</button>
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
        </>
    );
}