import axios from "axios";

const api = axios.create({
    baseURL: "https://api-test.a32fred.repl.co"
});

export default api;
