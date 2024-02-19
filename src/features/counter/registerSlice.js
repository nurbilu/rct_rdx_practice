// registerSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { registerUser } from './cntAPI'; // This should be your API call for registration

// Initial state for registration
const initialState = {
    user: null,
    error: null,
    status: 'idle', // 'idle', 'loading', 'succeeded', 'failed'
};

// Async thunk for registration
export const register = createAsyncThunk(
    'auth/register',
    async (userData, thunkAPI) => {
        try {
            const response = await registerUser(userData);
            // You might want to store user's info or a session token here
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

// Create the slice
export const registerSlice = createSlice({
    name: 'register',
    initialState,
    reducers: {
        // Reducers for additional registration logic if needed
    },
    extraReducers: (builder) => {
        builder
            .addCase(register.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(register.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.user = action.payload;
            })
            .addCase(register.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            });
    },
});

// Export actions and the reducer
export default registerSlice.reducer;
