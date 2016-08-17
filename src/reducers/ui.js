// @flow

import * as ACTION from '../actions/types';

import type { State, Action } from '../types';

const initial = {
  counter: 0,
};

export default (state: State = initial, action: Action) => {
  switch (action.type) {
    case ACTION.INCREASE: {
      return {
        ...state,
        counter: state.counter + 1,
      };
    }
    case ACTION.DECREASE:
      return {
        ...state,
        counter: state.counter - 1,
      };
    default:
      return state;
  }
};
