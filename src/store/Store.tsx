import React, { createContext, useReducer, Reducer, Dispatch } from 'react';
import { reducer } from './';
import { Action, IEpisode } from './types';

export interface IState {
  episodes: IEpisode[];
  favorites: IEpisode[];
}

const initialState: IState = {
  episodes: [],
  favorites: [],
};
export type TDispatch = Dispatch<Action> | Function;
type TInitialStore = [IState, Function];
export type TStore = [IState, TDispatch];

export const Store = createContext<TInitialStore>([initialState, reducer]);

export const StoreProvider = ({ children }: JSX.ElementChildrenAttribute): JSX.Element => {
  const value: TStore = useReducer<Reducer<IState, Action>>(reducer, initialState);

  return <Store.Provider value={value}>{children}</Store.Provider>;
};
