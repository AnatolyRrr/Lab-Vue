import axios from 'axios';
import type { AxiosInstance } from 'axios';

const $axios: AxiosInstance = axios.create({
  baseURL: 'https://swapi.dev'
});

export default $axios;
