export class NoteModel {
    static ID: number = 0;

    public id: number;
    constructor (public title: string, public content: string) {
        this.id = ++NoteModel.ID;
    }
}