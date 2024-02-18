import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchCount } from './cntAPI';

const initialState = {
    value: 0,
    status: 'idle',
};

export const biggerAsync = createAsyncThunk(
    'cnt/fetchCount',
    async (amount) => {
        const response = await fetchCount(amount);
        return response.data;
    }
);

export const cntSlice = createSlice({
    name: 'cnt',
    initialState,
    reducers: {
        add2num: (state, action) => {
            state.value += action.payload.first + action.payload.sec;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(biggerAsync.pending, (state, action) => {
                console.log(action.payload);
                state.status = 'loading';
            })
            .addCase(biggerAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                state.value += action.payload;
            });
    },
});

export const { add2num } = cntSlice.actions;
export const selectCount = (state) => state.cnt.value;
export const selectStatus = (state) => state.cnt.status;
export default cntSlice.reducer;
