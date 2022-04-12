import React from "react";
import type { Note as NoteType } from "../types";

import styles from "./note.module.css";

export default function Note({ title, content }: NoteType) {
    return (
        <article className={styles.Note}>
            <input type="text" placeholder="Note title" value={title} className={styles.NoteTitle} />
            <textarea className={styles.NoteContent}>{content}</textarea>
        </article>
    );
}