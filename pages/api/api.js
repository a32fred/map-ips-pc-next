import axios from "axios";

const api = axios.create({
    baseURL: "https://your-api-host-where.com"
});

export default api;
