import React, { ElementType } from 'react';
import UserDetail from "@/components/ui/dashboard/UserDetail";
import { error } from 'console';

type Props = {
    params: {
        id: number
    }
}

function getArray <ElementType> (array : Array<ElementType>){
    return array[0]
}

const numbers = [1, 2, 3]
const getAllNum = getArray(numbers)
console.log(getAllNum)

const string = ["A", "B", "C"]
const getAllString = getArray(string);
console.log(getAllString);

type ApiResponse <Data> = {
    payload : Data,
    error : boolean
}
const response : ApiResponse<{name : string, age : number} []> = {
    payload: [
        {name : 'panha', age : 10},
        {name : 'bora', age : 20},
        {name : 'dara', age : 30},
    ],
    error: false
}
console.log(...response?.payload);

const Page = ({params}: Props) => {
    console.log("Params: ", params.id);
    return (
        <div>
            <h5>User info</h5>
            <h1>{params.id}</h1>
            <UserDetail id={params.id} />
        </div>
    );
};

export default Page;