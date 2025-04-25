import {createSlice,configureStore} from "@reduxjs/toolkit"

const data=[]

const itemSlice=createSlice({
    name:"user",
    initialState:data,
    reducers:{
        additems:(state,action)=>{
           return [...state,action.payload]
        },
        removeitems:(state,action)=>{
            return state.filter(item=>item.id!=action.payload) 
        }
    }
})

const password=[]
const passwordSlice=createSlice({
    name:"password",
    initialState:password,
    reducers:{
        addpassword:(state,action)=>{
            return [...state,action.payload]
        }
    }
})

export const {additems,removeitems}=itemSlice.actions
export const {addpassword}=passwordSlice.actions

export const store=configureStore({
    reducer:{
        user:itemSlice.reducer,
        password:passwordSlice.reducer
    }
})