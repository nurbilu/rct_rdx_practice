import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectMyCount, addOne, subOne } from './cntSlice';

const MyShow = () => {
    const count = useSelector(selectMyCount);
    const dispatch = useDispatch();

    return (
        <div>
            <button onClick={() => dispatch(addOne())}>+</button>
            <button onClick={() => dispatch(subOne())}>-</button>
            <h1>{count}</h1>
        </div>
    );
};

export default MyShow