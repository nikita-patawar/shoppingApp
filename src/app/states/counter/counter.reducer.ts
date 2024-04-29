import { createReducer, on } from "@ngrx/store"
import { decrement, increment, reset } from "./counter.action"
export interface CounterState{
    count : number,
    value :number
}

export const initialCounterState: CounterState={
    count:0,
    value:1
}

export const counterReducer = createReducer(
    initialCounterState,
    on(increment,state=>({...state,count:state.count+1})),
    on(decrement,state=>({...state,count:state.count-1})),
    on(reset,state=>({...state,count:0})))