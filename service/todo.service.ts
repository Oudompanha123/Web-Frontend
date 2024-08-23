import {http} from "@/utils/http";
import {MessageFormat} from "@/utils/message-format";
import {InsertTodo, Todo, TodoResponse, UpdateTodo} from "@/lib/types";


const ServiceId = {
    TODO: '/api/v1/todo',
    GET_BY_ID: '/api/v1/todo/{0}'
}

const getTodo = async (): Promise<TodoResponse> => {
    const result = await http.get(ServiceId.TODO)
    return result?.data?.data;
}

const getTodoById = async (id: number ): Promise<Todo> => {
    const result = await http.get(MessageFormat.format(ServiceId.GET_BY_ID, id))
    return result?.data;
}

const updateTodo = async (id: number, payload: UpdateTodo): Promise<VoidFunction> => {
    const result = await http.put(MessageFormat.format(ServiceId.GET_BY_ID, id), payload)
    return result?.data;
}

const insertTodo = async (payload : InsertTodo): Promise<VoidFunction> => {
    const result = await http.post(ServiceId.TODO, payload);
    return result?.data;
}

const deleteTodo = async (id : number): Promise<VoidFunction> => {
    const result = await http.delete(MessageFormat.format(ServiceId.GET_BY_ID, id));
    return result?.data;
    
}

export const todoService = {
    getTodo,
    getTodoById,
    updateTodo,
    insertTodo,
    deleteTodo
}
