export interface User {
    id: number;
    name: string;
    email: string;
}

export interface Todo {
    id: number;
    title: string;
    status: boolean;
}

export interface TodoResponse {
    todo: Todo[];
}

export interface UpdateTodo {
    title: string
}

export interface InsertUser{
    title : string,
    status : boolean
}

