import React,{useState} from "react";

import { useAppSelector,useAppDispatch } from "../../app/hooks";

import { decrement,increment,incrementByAmount, incrementByAmountAsync } from "./counterSlice";

export function Counter(){
    const [input, setInput] = useState("")
    const count = useAppSelector((state) => state.counter.value)
    const dispatch = useAppDispatch();

    return(

        <div>

            <button onClick={() => dispatch(increment())}>+</button>
            <br />
            <p>{count}</p>
            <br />
            <button onClick={() => dispatch(decrement())}>-</button>
            <br />
            <input type="text" value={input} onChange={(e)=> setInput(e.target.value) } />
            <button onClick={() => dispatch(incrementByAmount( {}=parseInt(input) ))}>Increment By Amount</button>
            <button onClick={() => dispatch(incrementByAmountAsync( {}=parseInt(input) ))}>Increment By Amount Async</button>

        </div>
    )
        
    
}