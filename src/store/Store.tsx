import React, { createContext, ReactElement, ReactChildren, useReducer, Reducer, Dispatch } from 'react';
import { ActionTypes } from './types';

export interface IState {
  episodes: IEpisode[];
  favorites: IEpisode[];
}

const initialState: IState = {
  episodes: [],
  favorites: [],
};

export interface IEpisode {
  id: number;
  image: { medium: string };
  name: string;
  season: number;
  number: number;
}

interface IFetchAction {
  type: ActionTypes.FETCH_DATA;
  payload: IEpisode[];
}

interface IAddFavAction {
  type: ActionTypes.ADD_FAV;
  payload: IEpisode;
}

interface IRemoveFavAction {
  type: ActionTypes.REMOVE_FAV;
  payload: IEpisode[];
}

type Action = IFetchAction | IAddFavAction | IRemoveFavAction;

const reducer = (state: IState, action: Action): IState => {
  switch (action.type) {
    case ActionTypes.FETCH_DATA:
      return { ...state, episodes: action.payload };

    case ActionTypes.ADD_FAV:
      return { ...state, favorites: [...state.favorites, action.payload] };

    case ActionTypes.REMOVE_FAV:
      console.log(`action.payload`, action.payload);
      return { ...state, favorites: [...action.payload] };

    default:
      return state;
  }
};

type TInitialStore = [IState, Function];
export type TStore = [IState, Dispatch<Action> | Function];

export const Store = createContext<TInitialStore>([initialState, reducer]);

interface IStoreProviderProps {
  children: ReactElement | ReactChildren;
}

export const StoreProvider = ({ children }: IStoreProviderProps): JSX.Element => {
  const value: TStore = useReducer<Reducer<IState, Action>>(reducer, initialState);

  return <Store.Provider value={value}>{children}</Store.Provider>;
};
