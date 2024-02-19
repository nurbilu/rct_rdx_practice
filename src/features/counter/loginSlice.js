// authSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { userLogin } from './cntAPI'; // Import the userLogin function from cntAPI.js

// Define the initial state for the authentication slice
const initialState = {
    user: null,
    error: null,
    status: 'idle', // 'idle', 'loading', 'succeeded', 'failed'
};

// Create an async thunk for the login process
export const login = createAsyncThunk(
    'auth/login',
    async ({ username, password }, thunkAPI) => {
        try {
            const response = await userLogin(username, password);
            // You may want to store the user's info or a session token in local storage here
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

// Create the slice
export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        // You can add reducers for other actions such as logout here
        logout: (state) => {
            state.user = null;
            // Also clear any stored session from local storage here
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(login.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.user = action.payload;
            })
            .addCase(login.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            });
    },
});

// Export actions and reducer
export const { logout } = authSlice.actions;
export default authSlice.reducer;
