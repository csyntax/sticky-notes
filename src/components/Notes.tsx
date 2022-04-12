import React from "react";

import type { Note as NoteType } from "../types";
import Note from "./Note";

import styles from "./notes.module.css";

type Props = {
    notes: NoteType[]
}

export default function Notes({ notes }: Props) {
    return (
        <main className={styles.Notes}>
            {notes.map(note => <Note title={note.title} content={note.content} />)}
        </main>
    );
}