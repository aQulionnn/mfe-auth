import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
})

api.interceptors.response.use(
    response => response,
    error => {
        console.error(error)
        return Promise.reject(error)
    }
)

export default api