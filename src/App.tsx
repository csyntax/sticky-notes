import React, { useEffect, useState } from 'react';
import Notes from './components/Notes';
import { Note } from './types';

export default function App() {
    const [notes, setNotes] = useState<Note[]>([]);

    useEffect(() => console.log(notes), [notes])

    const addEmptyNote = () => {
        const note: Note = {
            id: Date.now(),
            title: "Empty note title",
            content: "Empty note content",
        };

        setNotes(oldNotes => [...oldNotes, note]);
    };

    const onChangeNote = (note: Note) => {
        setNotes(prevNotes => {
            const oldNotes = prevNotes.filter(n => n.id !== note.id);

            return [...oldNotes, { id: note.id, title: note.title, content: note.content }];
        })
    };

    return (
        <div className="App">
           <Notes notes={notes} onChangeNote={onChangeNote}/>
           <button onClick={addEmptyNote}>Add empty note</button>
        </div>
    );
}