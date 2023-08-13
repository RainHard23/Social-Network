import axios from 'axios';
import {ProfileTypeProps} from "../Components/Profile/Profile";



const instance = axios.create(
    {
        withCredentials: true,
        baseURL: 'https://social-network.samuraijs.com/api/1.0/',
        headers: {
            "API-KEY": '2d556b28-b1c8-4c0c-a89b-1938bae68b1b'
        }
    });


export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(responce => {
                return responce.data
            });
    },
    follow(userId: number) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId: number) {
        return instance.delete(`follow/${userId}`)
    },
    getProfile(userId: string) {
        return profileAPI.getProfile(userId)
    },

}


export const profileAPI = {
    getProfile(userId: string) {
        return instance.get(`profile/` + userId)
    },
    getStatus(userId: string) {
        return instance.get(`profile/status/` + userId)
    },
    updateStatus(status: string) {
        return instance.put(`profile/status`, {status})
    },
    savePhoto(photoFile: string) {
        const formData = new FormData()
        formData.append("image", photoFile)
        return instance.put(`profile/photo`, formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
        })
    },
    saveProfile(profile: ProfileTypeProps) {
        return instance.put(`profile`, profile)
    }
}
export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    },
    login(email: string,password: string, rememberMe: boolean, captcha: string) {
        return instance.post(`auth/login`, {email,password, rememberMe, captcha})
    },
    logout() {
        return instance.delete(`auth/login`,)
    }
}

export const securityAPI = {
    getCaptchaUrl() {
        return instance.get(`security/get-captcha-url`)
    },
}
