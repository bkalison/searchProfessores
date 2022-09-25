import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3334/api/'
});

export default api