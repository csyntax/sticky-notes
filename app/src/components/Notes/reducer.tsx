type Note = {
    id: string;
    title: string,
    content: string,
    date: string,
};

type State = {
    notes: Note[]
};

type Action = {
    type: "CREATE" | "UPDATE" | "DELETE" | "CLEAR";
    note?: Note,
};

export default function reducer(state: State, action: Action) {
    switch (action.type) {
        case "CREATE": 
      
        case "UPDATE":
            
        case "DELETE":
            
        case "CLEAR": 
           
        default:
            return state;
    };
};
