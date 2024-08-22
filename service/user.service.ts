import {http} from "@/utils/http";
import {MessageFormat} from "@/utils/message-format";
import {User, InsertUser} from "@/lib/types";


const ServiceId = {
    USER: '/users',
    GET_BY_ID: '/users/{0}'
}

const getUsers = async (): Promise<User[]> => {
    const result = await http.get(ServiceId.USER)
    console.log(result?.data)
    return result?.data
}

const getUserById = async (id: number ): Promise<User> => {
    const result = await http.get(MessageFormat.format(ServiceId.GET_BY_ID, id))
    return result?.data
}

const updateUser = async (id: number): Promise<VoidFunction> => {
    const result = await http.put(MessageFormat.format(ServiceId.GET_BY_ID, id))
    return result?.data

}

const insertUser = async (payload : InsertUser) : Promise<VoidFunction> => {
    const result = await http.post(ServiceId.USER, payload)
    console.log(result?.data)
    return result?.data
}

const deleteUser = async (id : number) : Promise<VoidFunction> => {
    const result = await http.delete(MessageFormat.format(ServiceId.GET_BY_ID, id))
    return result?.data;
}

export const userService = {
    getUsers,
    getUserById,
    updateUser,
    insertUser,
    deleteUser
}
