import React from "react";

import type { Note as NoteType } from "../types";
import Note from "./Note";

import styles from "./notes.module.css";

type Props = {
    notes: NoteType[],
    onChangeNote: (note: NoteType) => void,
}

export default function Notes({ notes, onChangeNote }: Props) {
    return (
        <main className={styles.Notes}>
            {notes.map((note, index) => <Note title={note.title} content={note.content} key={index} onChangeNote={onChangeNote} />)}
        </main>
    );
}