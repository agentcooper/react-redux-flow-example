// @flow

import React, { Component } from 'react';

import { connect } from 'react-redux';

import type { State, Dispatch } from './types';
import type { Connector } from 'react-redux';

import {
  increase,
  decrease,
  increaseAsync,
} from './actions/counter';

type OwnProps = {
  text: string,
};

// https://github.com/agentcooper/react-redux-flow-example#awkward-parts
type StateProps = {
  counter: number,
} & OwnProps;

type DispatchProps = {
  increase: () => void,
  decrease: () => void,
  increaseAsync: () => void,
};

type Props = StateProps & DispatchProps;

const mapStateToProps = (state: State, ownProps: OwnProps): StateProps => ({
  counter: state.ui.counter,
  ...ownProps,
});

const mapDispatchToProps = (dispatch: Dispatch, ownProps: OwnProps): DispatchProps => ({
  increase: () => {
    dispatch(increase());
  },
  decrease: () => {
    dispatch(decrease());
  },
  increaseAsync: () => {
    dispatch(increaseAsync(300));
  },
});

class Counter extends Component {
  props: Props;

  render() {
    const {
      text,
      counter,
      increase,
      decrease,
      increaseAsync,
    } = this.props;

    const nbsp = '\u00A0';

    return (
      <div>
        <div>{ text } &mdash; own prop</div>
        <div>{ counter } &mdash; computed prop</div>
        <div>
          Basic actions:
          <button onClick={ increase }>Increase</button>
          { nbsp }
          <button onClick={ decrease }>Decrease</button>
          { nbsp }
        </div>
        <div>
          Thunked actions:
          { nbsp }
          <button onClick={ increaseAsync }>Increase (async)</button>
        </div>
      </div>
    );
  }
}

const connector: Connector<OwnProps, Props> = connect(mapStateToProps, mapDispatchToProps);

export default connector(Counter);
