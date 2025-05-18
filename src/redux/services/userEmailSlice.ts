import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IEmail {
  email: string;
}

const initialState: IEmail = {
 email: ""
};

const userEmailSlice = createSlice({
  name: "userEmail",
  initialState,
  reducers: {
    setUserEmailForm(state, action: PayloadAction<Partial<IEmail>>) {
      return { ...state, ...action.payload };
    },
    clearUserEmailForm(state) {
      return { ...initialState }; // Reset to initial state
    },
  },
});

export const { setUserEmailForm, clearUserEmailForm } = userEmailSlice.actions;
export default userEmailSlice.reducer;
