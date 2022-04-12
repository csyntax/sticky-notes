import React from "react";

type Note = {
    id: number;
    title: string;
    content: string;
}

type Props = {
    notes: Note[],
    onAddNote: (note: Note) => void;
    onUpdateNote: (note: Note) => void;
    onDeleteNote: (note: Node) => void;
}

export default function Notes({ notes, onAddNote, onUpdateNote, onDeleteNote }: Props) {
    return (
        <div className="Notes">
            {notes.map(note => note)}
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