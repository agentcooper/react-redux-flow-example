declare module 'redux' {

  /*

    S = State
    A = Action

  */

  declare type Dispatch<A: { type: $Subtype<string> }> = (action: A) => A;

  declare type MiddlewareAPI<S, A> = {
    dispatch: Dispatch<A>;
    getState(): S;
  };

  declare type Store<S, A> = {
    // rewrite MiddlewareAPI members in order to get nicer error messages (intersections produce long messages)
    dispatch: Dispatch<A>;
    getState(): S;
    subscribe(listener: () => void): () => void;
    replaceReducer(nextReducer: Reducer<S, A>): void
  };

  declare type Reducer<S, A> = (state: S, action: A) => S;

  declare type Middleware<S, A> =
    (api: MiddlewareAPI<S, A>) =>
      (next: Dispatch<A>) => Dispatch<A>;

  declare type StoreCreator<S, A> = {
    <S, A>(reducer: Reducer<S, A>, enhancer?: StoreEnhancer<S, A>): Store<S, A>;
    <S, A>(reducer: Reducer<S, A>, preloadedState: S, enhancer?: StoreEnhancer<S, A>): Store<S, A>;
  };

  declare type StoreEnhancer<S, A> = (next: StoreCreator<S, A>) => StoreCreator<S, A>;

  declare type Fn0<A> = () => A;
  declare type Fn1<A, B1> = (b1: B1) => A;
  declare type Fn2<A, B1, B2> = (b1: B1, b2: B2) => A;
  declare type Fn3<A, B1, B2, B3> = (b1: B1, b2: B2, b3: B3) => A;
  declare type Fn4<A, B1, B2, B3, B4> = (b1: B1, b2: B2, b3: B3, b4: B4) => A;
  declare type Fn5<A, B1, B2, B3, B4, B5> = (b1: B1, b2: B2, b3: B3, b4: B4, b5: B5) => A;
  declare type Fn6<A, B1, B2, B3, B4, B5, B6> = (b1: B1, b2: B2, b3: B3, b4: B4, b5: B5, b6: B6) => A;
  declare type Fn7<A, B1, B2, B3, B4, B5, B6, B7> = (b1: B1, b2: B2, b3: B3, b4: B4, b5: B5, b6: B6, b7: B7) => A;
  declare type Fn8<A, B1, B2, B3, B4, B5, B6, B7, B8> = (b1: B1, b2: B2, b3: B3, b4: B4, b5: B5, b6: B6, b7: B7, b8: B8) => A;
  declare type Fn9<A, B1, B2, B3, B4, B5, B6, B7, B8, B9> = (b1: B1, b2: B2, b3: B3, b4: B4, b5: B5, b6: B6, b7: B7, b8: B8, b9: B9) => A;

  declare type ActionCreators<K, A> = { [key: K]: (...args: Array<any>) => A };

  declare function createStore<S, A>(reducer: Reducer<S, A>, enhancer?: StoreEnhancer<S, A>): Store<S, A>;
  declare function createStore<S, A>(reducer: Reducer<S, A>, preloadedState: S, enhancer?: StoreEnhancer<S, A>): Store<S, A>;

  declare function applyMiddleware<S, A>(...middlewares: Array<Middleware<S, A>>): StoreEnhancer<S, A>;

  declare function bindActionCreators<A>(actionCreators: Fn0<A>, dispatch: Dispatch<A>): Fn0<A>;
  declare function bindActionCreators<A, B1>(actionCreators: Fn1<A, B1>, dispatch: Dispatch<A>): Fn1<A, B1>;
  declare function bindActionCreators<A, B1, B2>(actionCreators: Fn2<A, B1, B2>, dispatch: Dispatch<A>): Fn2<A, B1, B2>;
  declare function bindActionCreators<A, B1, B2, B3>(actionCreators: Fn3<A, B1, B2, B3>, dispatch: Dispatch<A>): Fn3<A, B1, B2, B3>;
  declare function bindActionCreators<A, B1, B2, B3, B4>(actionCreators: Fn4<A, B1, B2, B3, B4>, dispatch: Dispatch<A>): Fn4<A, B1, B2, B3, B4>;
  declare function bindActionCreators<A, B1, B2, B3, B4, B5>(actionCreators: Fn5<A, B1, B2, B3, B4, B5>, dispatch: Dispatch<A>): Fn5<A, B1, B2, B3, B4, B5>;
  declare function bindActionCreators<A, B1, B2, B3, B4, B5, B6>(actionCreators: Fn6<A, B1, B2, B3, B4, B5, B6>, dispatch: Dispatch<A>): Fn6<A, B1, B2, B3, B4, B5, B6>;
  declare function bindActionCreators<A, B1, B2, B3, B4, B5, B6, B7>(actionCreators: Fn7<A, B1, B2, B3, B4, B5, B6, B7>, dispatch: Dispatch<A>): Fn7<A, B1, B2, B3, B4, B5, B6, B7>;
  declare function bindActionCreators<A, B1, B2, B3, B4, B5, B6, B7, B8>(actionCreators: Fn8<A, B1, B2, B3, B4, B5, B6, B7, B8>, dispatch: Dispatch<A>): Fn8<A, B1, B2, B3, B4, B5, B6, B7, B8>;
  declare function bindActionCreators<A, B1, B2, B3, B4, B5, B6, B7, B8, B9>(actionCreators: Fn9<A, B1, B2, B3, B4, B5, B6, B7, B8, B9>, dispatch: Dispatch<A>): Fn9<A, B1, B2, B3, B4, B5, B6, B7, B8, B9>;
  // unsafe (all action creator signatures are erased)
  declare function bindActionCreators<A, K, C: ActionCreators<K, A>>(actionCreators: C, dispatch: Dispatch<A>): ActionCreators<$Keys<C>, A>;

  // unsafe (you can miss a field and / or assign a wrong reducer to a field)
  declare function combineReducers<S: Object, A>(reducers: {[key: $Keys<S>]: Reducer<any, A>}): Reducer<S, A>;

  declare function compose<S, A>(...fns: Array<StoreEnhancer<S, A>>): Function;

}
