
import { useSelector, useDispatch } from 'react-redux';

import {
  increment,
  decrement,
  reset
 
} from './counterslic.js';

function Counter() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();


  return (
    <div>
      <p>{count}</p>
      <div>
        <button onClick={()=>dispatch(increment())}>+</button>
        <button onClick={()=>dispatch(decrement())}>-</button>
        <button onClick={()=>dispatch(reset())}>reset</button>
      </div>
    </div>
  )
}

export default Counter
