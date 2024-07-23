import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import authService from './authService';
import { LoginError, LoginResponse } from 'src/types/auth';

const userString = localStorage.getItem('user');
const tokenString = localStorage.getItem('token');
const user = userString ? JSON.parse(userString) : null;
const token = tokenString || null;

const initialState = {
  user: user || null,
  token: token || null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

// Login user
export const login = createAsyncThunk<LoginResponse, { username: string; password: string }, { rejectValue: LoginError }>(
  'auth/login',
  async (userData, thunkAPI) => {
    try {
      const response = await authService.login(userData);
      localStorage.setItem('user', JSON.stringify(response.user));
      localStorage.setItem('token', response.token);
      return response; // Adjusted to return both user and token
    } catch (error: any) {
      const message =
        (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue({ message });
    }
  }
);

export const logout = createAsyncThunk<void, void>('auth/logout', async () => {
  await authService.logout();
  localStorage.removeItem('user');
  localStorage.removeItem('token');
});

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload.user; // Adjusted to handle user
        state.token = action.payload.token; // Adjusted to handle token
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = "Login is rejected";
        state.user = null;
        state.token = null;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
        state.token = null;
      });
  },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
