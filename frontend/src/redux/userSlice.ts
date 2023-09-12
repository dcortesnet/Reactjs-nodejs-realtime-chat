import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    email: '',
    room: '',
  },
  reducers: {
    updateUser: (state, action) => {
      state.email = action.payload.email;
      state.room = action.payload.room;
    },
  },
});

export const { updateUser } = userSlice.actions;
export default userSlice.reducer;
