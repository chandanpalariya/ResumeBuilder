import axios from 'axios'
import { BASE_URL } from "./apiPath"

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
    }
})

// request interceptor
axiosInstance.interceptors.request.use(
    (config) => {
        const accessToken = localStorage.getItem('token')
        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`
        }
        return config
    },
    (error) => Promise.reject(error)
)

// response interceptor
axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response) {   
            if (error.response.status === 401) {
                window.location.href = "/"
            } else if (error.response.status === 500) {
                console.error("server error")
            } else if (error.code === "ECONNABORTED") {
                console.error("request timeout")
            }
        }
        return Promise.reject(error)
    }
)

export default axiosInstance
