import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://reqres.in/api"
})


export const api = {
    get(endpoint) {
        return axiosInstance.get(endpoint);
    },
    post(endpoint, body) {
        return axiosInstance.post(endpoint, body);
    },
    put(endpoint, body) {
        return axiosInstance.put(endpoint, body);
    },
    login(body) {
        return axios.post("https://reqres.in/api/register", body);
    }
}