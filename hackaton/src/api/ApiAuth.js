import axios from "axios";

const baseUrl = import.meta.env.BASE_URL

const ApiAuth = axios.create({
    baseUrl,
    headers: {
        Accept: "application/json"
    }
})

export default ApiAuth