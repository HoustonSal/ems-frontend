import axios, { type AxiosInstance } from "axios";

export interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}

const http:AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_REST_API_MOCKUP_BASE_URL,
    timeout: 3000,
    headers: {
        "content-type": "application/json" 
    }
});

http.interceptors.response.use(({data}) => data);

export const api = {
    employees: {
        getAllEmployees(params = {}){
            return http.get<Employee[], Employee[]>("", {params})
                .catch((error) => error.response.status === 400 ? [] : Promise.reject(error));
        }
    }
}