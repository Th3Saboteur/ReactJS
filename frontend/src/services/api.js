import axios from 'axios';

const api = axios.create({baseURL: 'http://localhost:3001'}) //Caso fose um servidor o endereço estaria aqui

export default api;