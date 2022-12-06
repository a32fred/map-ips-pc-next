import axios from "axios";

const api = axios.create({
    baseURL: "https://a32-api-test.a32fred.repl.co"
});

export default api;