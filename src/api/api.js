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
    },
    folow(userId) {
        return  instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)


    },
    unfollow(userId) {
      return   instance.delete(`follow/${userId}`)
    },
    getProfile(userId) {
        return  instance.get(`profile/` + userId)

    }
}
export const authAPI = {
    me () {
        return  instance.get(`auth/me`)
}}







