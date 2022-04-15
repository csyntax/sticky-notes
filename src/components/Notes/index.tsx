import React, { useEffect, useState, useCallback } from "react";

import Note from "../Note";
import storage from "../../storage";
import { NoteModel } from "../../models";

import styles from "./notes.module.css";

const STORAGE_KEY = "NOTES";

export default function Notes() {
    const initialNotes = JSON.parse(storage.get(STORAGE_KEY));

    const [notes, setNotes] = useState<NoteModel[]>(initialNotes);

    useEffect(() => {
        storage.set(STORAGE_KEY, notes);
    }, [notes]);

    const addEmptyNote = useCallback(() => {
        setNotes(oldNotes => [...oldNotes, new NoteModel("Empty note title", "Empty note content")]);
    }, []);

    const onChangeNote = useCallback((note: NoteModel) => {
        setNotes(oldNotes => oldNotes.map(n => n.id === note.id ? note : n));
    }, []);

    return (
        <>
            <header>
                <button onClick={addEmptyNote} className={styles.AddBtn}>Add empty note</button>
            </header>
            <main className={styles.Notes}>
                {notes.map((note, index) => <Note id={note.id} title={note.title} content={note.content} key={index} onChangeNote={onChangeNote} />)}
            </main>
        </>
    );
}