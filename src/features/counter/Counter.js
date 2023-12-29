
import { useSelector, useDispatch } from 'react-redux';

import {
  increment,
  decrement,
  reset
 
} from './counterslic.js';
import './counter.css'

function Counter() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();


  return (
    <div  className='container'>
      <p  className='counter'>{count}</p>
      <div  className='buttons'>
        <button className='button'  onClick={()=>dispatch(increment())}>+</button>
        <button className='button' onClick={()=>dispatch(decrement())}>-</button>
        <button className='button' onClick={()=>dispatch(reset())}>reset</button>
      </div>
    </div>
  )
}

export default Counter
