import React, { useState } from 'react';
import Notes from './components/Notes';
import { Note } from './types';

export default function App() {
    const [notes, setNotes] = useState<Note[]>([]);

    const addEmptyNote = () => {
        const note: Note = {
            title: "Empty note title",
            content: "Empty note content",
        };

        setNotes(oldNotes => [...oldNotes, note]);
    };

    const onChangeNote = (note: Note) => {
       
    };

    return (
        <div className="App">
           <Notes notes={notes} onChangeNote={onChangeNote}/>
           <button onClick={addEmptyNote}>Add empty note</button>
        </div>
    );
}