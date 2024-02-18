import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectCount, add2num, selectStatus, biggerAsync } from './cntsSlice'


const Cnt = () => {
    const count = useSelector(selectCount);
    const status = useSelector(selectStatus);
    const dispatch = useDispatch();
    return (
        <div>
            <h1>{status}</h1>
            <button onClick={() => dispatch(add2num({ first: 7, sec: 3 }))}>test async</button>
            <button onClick={() => dispatch(biggerAsync({ first: 34, sec: 42 }))}>test sync</button>
            {count}
        </div>
    )
}

export default Cnt