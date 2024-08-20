'use client'

import React, { useState } from 'react';
import { useMutation, useQuery } from "@tanstack/react-query";
import { userService } from "@/service/user.service";
import axios from "axios";

type User = {
    id: number;
    name: string;
    email: string;
};

type Props = {
    id: number;
};

const UserDetail = ({ id }: Props) => {

    const { data, isLoading, error } = useQuery({
        queryKey: ["user", id],
        queryFn: async () => {
            const response = await axios.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`);
            console.log(response?.data)
            return response.data; // Return only the user data which is type User
        }
    });

    const { mutate: updateUser } = useMutation({
        mutationFn: () => userService.updateUser(id),
    });

    if(error) {
        return <div>{error.message}</div>;
    }

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <article>
            <span>{data?.name}</span>
            <span>{data?.email}</span>
            <button onClick={() => updateUser()}>Update User</button>
        </article>
    );
};

export default UserDetail;
