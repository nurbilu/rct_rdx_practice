import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    value: 0
};

export const cntSlice = createSlice({
    name: 'cnt',
    initialState,
    reducers: {
        addOne: state => {
            state.value += 1;
        },
        subOne: state => {
            state.value -= 1;
        },
    },
    extraReducres: (builder) => {},
});

export const { addOne, subOne } = cntSlice.actions;
export const selectMyCount = state => state.cnt.value;
export default cntSlice.reducer;
