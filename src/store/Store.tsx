import React, { createContext, ReactElement, ReactChildren, useReducer, Reducer, Dispatch } from 'react';

interface IState {
  episodes: [];
  favorites: [];
}

const initialState: IState = {
  episodes: [],
  favorites: [],
};

interface IAction {
  type: string;
  payload?: any;
}

type MyReducer = Reducer<IState, IAction> | Dispatch<IAction>;

const reducer = (state: IState, action: IAction): IState => {
  switch (action.type) {
    case 'FETCH_DATA':
      return { ...state, episodes: action.payload };

    default:
      return state;
  }
};

type IStore = [IState, MyReducer];

const initialStore: IStore = [initialState, reducer];

export const Store = createContext<IStore>(initialStore);

interface IStoreProviderProps {
  children: ReactElement | ReactChildren;
}

export const StoreProvider = ({ children }: IStoreProviderProps): JSX.Element => {
  const value = useReducer<Reducer<IState, IAction>>(reducer, initialState);

  return <Store.Provider value={value}>{children}</Store.Provider>;
};
