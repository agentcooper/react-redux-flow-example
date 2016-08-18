// @flow

import * as ACTION from './types';

import type { Dispatch } from '../types';

export const increase = () => ({
  type: ACTION.INCREASE,
});

export const decrease = () => ({
  type: ACTION.DECREASE,
});

export const increaseAsync = (timeout: number) => (dispatch: Dispatch) => {
  setTimeout(() => {
    dispatch(increase());
  }, timeout);
};
