import { uniqueId } from 'lodash';

function generateId(name: string) {
    const now = Date.now();

    return uniqueId(`${name}-${now}`);
}

export class NoteModel {
    public id: string = generateId(this.title);
    
    constructor (public title: string, public content: string) { }
}

enum Flag {
    
}

interface INote {
    id: string;
    title: string;
    contet: string;
    date: string;
    flag: Flag;
}