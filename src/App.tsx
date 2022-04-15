import React from 'react';
import Notes from './components/Notes';

import styles from "./App.module.css";

export default function App() {
    return (
        <div className={styles.App}>
            <Notes />
        </div>
    );
}