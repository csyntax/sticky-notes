import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Notes from './components/Notes';

export default function App() {
    const [notes, setNotes] = useState([]);

    const onAddNote = () => {

    };

    const onUpdateNote = () => {

    };

    const onDeleteNote = () => {

    };

    return (
        <div className="App">
           <Notes notes={notes} onAddNote={onAddNote} onUpdateNote={onUpdateNote} onDeleteNote={onDeleteNote} />
        </div>
    );
}