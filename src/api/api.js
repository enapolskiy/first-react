import * as axios from "axios";

const instance = axios.create ({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers : {
        "API-KEY" : "e9e72aa8-03e0-46cd-a214-4b589f9c291d"
    }
});

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return  instance.get( `users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            });
    }
}







