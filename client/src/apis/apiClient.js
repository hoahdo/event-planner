import axios from "axios";

const axiosClient = axios.create({
    // baseURL: `${import.meta.env.VITE_API_BASE_URL}`
    baseURL: `http://localhost:3000`,
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
    }
})

export default axiosClient;