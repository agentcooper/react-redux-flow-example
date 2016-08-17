### react-redux-flow-example

Based on definitions done by @gcanti in https://github.com/reactjs/redux/pull/1887.

## Current state

`src/Counter.js` is 100% Flow covered connected component.

Flow can check props for it: try removing `text` prop for Counter in `src/App.js`.

## Awkward parts

You need to merge `ownProps` into `stateProps` for ownProps to be available in the connected component.

## To-do

- Typed thunked actions

## Running Flow

`npm run flow`
