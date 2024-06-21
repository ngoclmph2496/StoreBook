import axios from "axios";

const axiosClients = axios.create({
    baseURL: '',
    headers: {
        'Content-Type': 'application/json'
    }
});

export default axiosClients;