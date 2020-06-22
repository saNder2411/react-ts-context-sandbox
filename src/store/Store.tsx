import React, { ReactElement, ReactChildren } from 'react';

interface IState {
  episodes: [];
  favorites: [];
}

const initialState: IState = {
  episodes: [],
  favorites: [],
};

export const Store = React.createContext<IState>(initialState);

const reducer = () => {};

interface IStoreProviderProps {
  children: ReactElement | ReactChildren;
}

export const StoreProvider = ({ children }: IStoreProviderProps): JSX.Element => {
  return <Store.Provider value={initialState}>{children}</Store.Provider>;
};
