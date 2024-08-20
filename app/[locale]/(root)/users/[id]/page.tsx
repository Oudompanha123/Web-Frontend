import React from 'react';
import UserDetail from "@/components/ui/dashboard/UserDetail";

type Props = {
    params: {
        id: string
    }
}

const Page = ({params}: Props) => {
    return (
        <div>
            <h5>User info</h5>
            <h1>{params.id}</h1>
            <UserDetail id={params.id} />
        </div>
    );
};

export default Page;