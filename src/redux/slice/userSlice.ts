import { createAsyncThunk, createSlice, isRejectedWithValue } from "@reduxjs/toolkit";
import { userService } from "../../services/apiUserService";
import { AxiosError } from "axios";
import { IUser } from "../../interface/user";

type IInitialState = {
    users: IUser[],
    user:IUser,
    is_loading:boolean,

}

const initialState:IInitialState = {
    users: [],
    user: {
        id:0,
        name:"John",
        username:"Doe",
        email: "johndoe@gmail.com",
    },
    is_loading:false
}


const getAllUsers = createAsyncThunk<IUser[], void>(
    "userSlice/getAllUsers",
    async (_, {rejectWithValue}) =>{
        try{
            const {data} = await userService.getAllUser()
            return data
        }
        catch (err){
            const e = err as AxiosError
            return rejectWithValue(e.response?.data)
        }
    }
)


const getUserById = createAsyncThunk<IUser, string>(
    "userSlice/getUserById",
    async (id, {rejectWithValue}) =>{
        try{
            const {data} = await userService.getUserById(id)
            return data
        }
        catch (err){
            const e = err as AxiosError
            return rejectWithValue(e.response?.data)
        }
    }
)




const userSlice = createSlice({
    name:"userSlice",
    initialState,
    reducers:{},
    extraReducers: (build) =>build
    .addCase(getAllUsers.fulfilled, (state, {payload})=>{
        state.users = payload
        state.is_loading = false
    })
    .addCase(getAllUsers.pending, (state)=>{
        state.is_loading = true
    })
    .addCase(getAllUsers.rejected, (state)=>{
      state.is_loading = false
    })
    .addCase(getUserById.fulfilled, (state, {payload})=>{
        state.user = payload
        state.is_loading = false
    })
    .addCase(getUserById.pending, (state)=>{
        state.is_loading = true
    })
    .addCase(getUserById.rejected, (state)=>{
        state.is_loading = false
    })
})


const {reducer: userReducer, actions} = userSlice;


const userActions ={
    ...actions,
    getAllUsers,
    getUserById
}


export {userReducer, userActions}
