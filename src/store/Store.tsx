import React, { createContext, ReactElement, ReactChildren, useReducer, Reducer, Dispatch } from 'react';

interface IState {
  episodes: IEpisode[];
  favorites: [];
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

interface IAction {
  type: string;
  payload: IEpisode[];
}

const reducer = (state: IState, action: IAction): IState => {
  switch (action.type) {
    case 'FETCH_DATA':
      return { ...state, episodes: action.payload };

    default:
      return state;
  }
};

type InitialStore = [IState, Function];
type Store = [IState, Dispatch<IAction>];

export const Store = createContext<InitialStore>([initialState, reducer]);

interface IStoreProviderProps {
  children: ReactElement | ReactChildren;
}

export const StoreProvider = ({ children }: IStoreProviderProps): JSX.Element => {
  const value: Store = useReducer<Reducer<IState, IAction>>(reducer, initialState);

  return <Store.Provider value={value}>{children}</Store.Provider>;
};
