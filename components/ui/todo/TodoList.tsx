"use client"
import React from 'react';
import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {todoService} from "@/service/todo.service";
import {UpdateTodo} from "@/lib/types";
import { useRouter } from 'next/navigation';
import { error } from 'console';


const TodoList = () => {

    const router = useRouter();

    const queryClient = useQueryClient();

    const {data, isLoading, isError} = useQuery({
        queryKey: ["todos"],
        queryFn: () => todoService.getTodo()
    })

    const {mutate: updateTodo} = useMutation({
        mutationFn: (payload: {id: number, body: UpdateTodo}) => todoService.updateTodo(payload.id, payload.body),
        onSuccess: () => {
            // queryClient.invalidateQueries(["todo"])
            queryClient.invalidateQueries({ queryKey: ['todos'] })
        }
    })

    function handleUpdate() {
        const id = 1;
        const body = {
            title: 'new name'
        }
        updateTodo({id: 1, body: body})
        router.push(`/todo/${id}`)
    }

    function add(a : number, b: number): string {
        return (a + b).toString() 
    }
    console.log(add(1, 2));

    

    // if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>Error: </p>;

    return (
        <main>
            <h2>Todo List</h2>
            {
                data?.todo?.map((todo, index ) => (
                    <h5 key={index + 1}>
                        {todo.title}
                    </h5>
                ))
            }
            <button onClick={handleUpdate}>update</button>
        </main>
    );
};

export default TodoList;
