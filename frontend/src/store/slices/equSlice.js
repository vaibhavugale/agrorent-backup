import { createSlice } from "@reduxjs/toolkit";
const initialState = {
   allEqu : [],
}

export const equSlice = createSlice({
  name: "equ",
  initialState: initialState,

  reducers: {
   setAllEqu : (state,value)=>{
       state.allEqu = value.payload;
   },
   }


})
// this is for dispatch
export const { setAllEqu} = equSlice.actions;

// this is for configureStore
export default equSlice.reducer;
