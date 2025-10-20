import { IUser } from "../interface/user";
import { apiServices } from "./apiServices";


export const userService =  {
    getAllUser: () => apiServices.get<IUser[]>("users"),
    getUserById: (id:string) => apiServices.get<IUser>(`users/${id}`)
}
