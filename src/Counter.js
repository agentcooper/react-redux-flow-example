// @flow

import React, { Component } from 'react';

import { connect } from 'react-redux';

import type { State, Dispatch } from './types';
import type { Connector } from 'react-redux';

import {
  increase,
  decrease,
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
});

class Counter extends Component {
  props: Props;

  render() {
    const {
      text,
      counter,
      increase,
      decrease,
    } = this.props;

    return (
      <div>
        <div>{ text }</div>
        <div>{ counter }</div>
        <div>
          <button onClick={ increase }>Increase</button>
          <button onClick={ decrease }>Decrease</button>
        </div>
      </div>
    );
  }
}

const connector: Connector<OwnProps, Props> = connect(mapStateToProps, mapDispatchToProps);

export default connector(Counter);
