import React from 'react';
import { createRoot } from 'react-dom/client';

import Notes from './components/Notes';

import './index.css';

const container = document.getElementById("root") as Element;
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <Notes />
    </React.StrictMode>
);