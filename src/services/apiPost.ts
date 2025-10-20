import { IPost } from "../interface/post"
import { apiServices } from "./apiServices"

export const apiPost = {
    getAllPost: ()=>apiServices.get<IPost[]>("posts")
}
