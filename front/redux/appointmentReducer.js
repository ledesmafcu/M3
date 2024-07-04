import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    turnos:[]
}

export const appointmentReducer = createSlice({
    name:"appointment",
    initialState,
    reducers:{
        getTurnos:(state, action)=>{
            state.turnos = action.payload.appointments;
        }
    }
});

export const { getTurnos } = appointmentReducer.actions;