import axios from "axios";
import { baseURL } from "../constants/baseApi";



export const apiServices = axios.create({
    baseURL,
    headers:{
        Accept: "application/json"
    }

})
