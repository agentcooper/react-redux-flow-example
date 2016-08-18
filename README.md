### react-redux-flow-example

Based on definitions done by [@gcanti](https://github.com/gcanti) in https://github.com/reactjs/redux/pull/1887.

## Current state

`src/Counter.js` is 100% Flow covered connected component.

Flow can check props for it: try removing `text` prop for Counter in `src/App.js`.

## Awkward parts

If you want to use `ownProps` inside the connected component (not just `mapStateToProps`/`mapDispatchToProps`), you should merge `ownProps` into `stateProps` for the type check.

## To-do

- [x] Typed thunked actions
- [ ] Use [$Exact](https://github.com/facebook/flow/tree/master/newtests/exact) type to filter out redundant props

## Running Flow

`npm run flow`
