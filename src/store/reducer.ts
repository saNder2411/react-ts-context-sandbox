import { ActionTypes, IState, Action } from './';

export const reducer = (state: IState, action: Action): IState => {
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
