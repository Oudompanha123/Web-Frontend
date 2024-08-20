import {userService} from "@/service/user.service";
import {useMutation, useQuery} from "@tanstack/react-query";

const useFetchUsers = () => {

    const query = useQuery({
        queryKey: ["users"],
        queryFn: () => userService.getUsers()
    })

    return {
        isLoading: query?.isLoading,
        isError: query?.isError,
        users: query?.data ?? []
    }
}

export default useFetchUsers;