import React, { FormEvent, useCallback, useState } from "react";

import styles from "./note.module.css";

type Props = {
    title: string,
    content: string;
}

export default function Note({ title, content }: Props) {
    const [note, setNote] = useState({ title, content });

    return (
        <article className={styles.Note}>
            <div>
                <input type="text" placeholder="Note title" defaultValue={note.title} className={styles.NoteTitle} />
            </div>
            <div>
                <textarea className={styles.NoteContent}>{note.content}</textarea>
            </div>
        </article>
    );
}