"use client"
import React from 'react'
import { useMutation, useQuery } from "@tanstack/react-query";
import { userService } from "@/service/user.service";
import axios from "axios";
import { UserResponse } from '@/lib/types';

type User = {
    id: number;
    name: string;
    email: string;
    phone : string;
    company : { name : string; bs : string}
};

type Props = {
    id: number;
};


function Page() {
    const { data, isLoading, error } = useQuery({
        queryKey: ["user"],
        queryFn: async () => {
            try{
                const response = await axios.get<User[]>(`https://jsonplaceholder.typicode.com/users`, {
                    headers: {
                        Accept : 'application/json',
                        'Content-Type': 'application/json',
                    },
                    timeout: 5000,
                });
                console.log("Data Response: ", response)
                return response?.data;
            } catch (error){
                console.error(error);
                throw error;
            } finally {
                console.log("Finally Block")
            }
            
        }
    });
    console.log("Data: ", data)
    
  return (
    <>
        <h1>{data?.map((data, index) => (
            <div key={index}>
                <p>ID: {data.id}</p>
                <p>Name: {data.name}</p>
                <p>Email: {data.email}</p>
                <p>Phone: {data.phone}</p>
                <p>Company: {data?.company?.name}</p>
                <a href={`/en/users/${data.id}`}>detail</a>
            </div>
        ))}</h1>
    </>
  )
}

export default Page