import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Notes from './components/Notes';
import { Note } from './types';

export default function App() {
    const [notes, setNotes] = useState<Note[]>([]);

    const onAddNote = () => {
        const note: Note = {
            title: "Empty note title",
            content: "Empty note content",
        };

        setNotes(oldNotes => [...oldNotes, note]);
    };

    return (
        <div className="App">
           <Notes notes={notes} />
           <button onClick={onAddNote}>Add empty note</button>
        </div>
    );
}