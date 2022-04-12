import React from "react";

import type { Note as NoteType } from "../types";
import Note from "./Note";

type Props = {
    notes: NoteType[],
    onAddNote: (note: NoteType) => void;
    onUpdateNote: (note: NoteType) => void;
    onDeleteNote: (note: NoteType) => void;
}

export default function Notes({ notes, onAddNote, onUpdateNote, onDeleteNote }: Props) {
    return (
        <div className="Notes">
            {notes.map(note => <Note title={note.title} content={note.content}  />)}
            <ul>
                <li>
                    <a href="#">
                        <h2>Title #1</h2>
                        <p>Text Content #1</p>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <h2>Title #2</h2>
                        <p>Text Content #2</p>
                    </a>
                </li>
            </ul>
        </div>
    );
}