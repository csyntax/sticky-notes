import React, { useEffect, useState } from "react";

import { NoteModel } from "../models";
import Note from "./Note";

import styles from "./notes.module.css";

// {notes.map((note, index) => <Note id={note.id} title={note.title} content={note.content} key={note.id} onChangeNote={onChangeNote} />)}

export default function Notes() {
    const [notes, setNotes] = useState<NoteModel[]>([]);

    useEffect(() => console.log(notes), [notes]);

    const addEmptyNote = () => {
        setNotes(prevNotes => {
            const newNote = new NoteModel("Empty note title", "Empty note body");

            return [...prevNotes, newNote];
        });
    };

    const onChangeNote = (note: NoteModel) => {
        setNotes(oldNotes => oldNotes.map(n => n.id === note.id ? note : n));
    };

    return (
        <main className={styles.Notes}>
            {notes.map((note, index) => <Note id={note.id} title={note.title} content={note.content} key={note.id} onChangeNote={onChangeNote} />)}
            <button onClick={addEmptyNote}>Add empty note</button>
        </main>
    );
}