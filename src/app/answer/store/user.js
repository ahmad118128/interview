import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: [],
  isLoading: false,
  isError: false,
};

const fetchUserList = createAsyncThunk('user/fetchUses', async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();
  return data;
});

const userList = createSlice({
  name: 'userList',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserList.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchUserList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(fetchUserList.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export default userList.reducer;
export { fetchUserList };
