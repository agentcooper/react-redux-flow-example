// @flow

import type { Store as ReduxStore, Dispatch as ReduxDispatch } from 'redux';

export type State = {
  ui: {
    counter: number,
  },
};

export type Action =
    { type: 'INCREASE' }
  | { type: 'DECREASE' }
  ;

export type Store = ReduxStore<State, Action>;

export type Dispatch = ReduxDispatch<Action>;
