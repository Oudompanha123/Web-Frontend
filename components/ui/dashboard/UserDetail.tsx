'use client'

import React, { useState } from 'react';
import { useMutation, useQuery } from "@tanstack/react-query";
import { userService } from "@/service/user.service";
import axios from "axios";

type User = {
    id: number;
    name: string;
    email: string;
    phone : string;
    company : string
};

type Props = {
    id: number;
};

const UserDetail = ({ id }: Props) => {
    console.log("Props: ", id)
    const { data, isLoading, error } = useQuery({
        queryKey: ["user", id],
        queryFn: async () => {
            try{
                const response = await axios.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`, {
                    headers: {
                        Accept : 'application/json',
                        'Content-Type': 'application/json',
                    },
                    timeout: 5000,
                });
                console.log("Data Response: ", response?.data?.name)
                return response?.data;
            } catch (error){
                console.error(error);
                throw error;
            } finally {
                console.log("Finally Block")
            }
            
        }
    });

    const { mutate: updateUser } = useMutation({
        mutationFn: () => userService.updateUser(id),
    });

    if(error) {
        return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <article>
            <span data-show={data?.id}>{data?.name}</span><br />
            <span>{data?.email}</span><br />
            <span>{data?.name}</span><br />
            <button onClick={() => updateUser()} btn-click={123}>Update User</button>
        </article>
    );
};

export default UserDetail;
