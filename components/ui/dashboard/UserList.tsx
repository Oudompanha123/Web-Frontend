"use client"
import React from 'react';
import useFetchUsers from "@/lib/hooks/use-fetch-users";
import Link from "next/link";

const UserList = () => {

    const {users} = useFetchUsers();

    return (
        <div>
            <h2>Users</h2>
            {
                users?.map((user, index) => (
                    <h5 key={index + 1}>
                        <Link href={`/en/users/` + user.id} >{user.name}</Link>
                    </h5>
                ))
            }

        </div>
    );
};

export default UserList;
