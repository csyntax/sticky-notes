import { uniqueId } from 'lodash';

function generateId(name: string) {
    const now = Date.now();

    return uniqueId(`${name}-${now}`);
}

export class NoteModel {
    public id: string = generateId(this.title);
    
    constructor (public title: string, public content: string) { }
}