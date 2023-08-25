import { createSlice } from "@reduxjs/toolkit";


type initialStateTypes = {
    show: boolean;
}
const initialState : initialStateTypes = {
    show:false,
}
export const portalSlice = createSlice({
    name: 'portal',
    initialState,
    reducers:{
        show:(state)=>{
            state.show = true;
        },
        hide:(state)=>{
            state.show = false;
        }
    }
});

export const {show,hide} =  portalSlice.actions;