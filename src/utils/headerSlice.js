import { createSlice } from "@reduxjs/toolkit";

const headerSlice = createSlice({
    name:"header",
    initialState:{
        link:""
    },
    reducers:{
        addlink:(state,action)=>{
           state.link = action.payload; 
        }
    }
})


export const {addlink} =headerSlice.actions;
export default headerSlice.reducer;