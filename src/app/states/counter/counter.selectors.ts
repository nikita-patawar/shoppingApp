import { createSelector } from "@ngrx/store";
import { Appstate } from "../app.states";

export const selectCounterState =(state: Appstate) => state.counter

export const selectCount = createSelector(selectCounterState,(state)=>state.count)