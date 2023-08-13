import { createReducer, on } from '@ngrx/store';
import { initialState } from './counter.state';
import {
  customIncrementAction,
  decrementAction,
  incrementAction,
  resetAction,
} from './counter.actions';

const _counterReducer = createReducer(
  initialState,
  on(incrementAction, (state) => {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }),
  on(decrementAction, (state) => {
    return {
      ...state,
      counter: state.counter - 1,
    };
  }),
  on(resetAction, (state) => {
    return {
      ...state,
      counter: (state.counter = 0),
    };
  }),
  on(customIncrementAction, (state, action) => {
    return {
      ...state,
      counter: state.counter + action.value,
    };
  })
);

export function counterReducer(state: any, action: any) {
  return _counterReducer(state, action);
}
