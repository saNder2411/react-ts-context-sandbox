export enum ActionTypes {
  FETCH_DATA = 'FETCH_DATA',
  ADD_FAV = 'ADD_FAV',
  REMOVE_FAV = 'REMOVE_FAV',
}

export interface IEpisode {
  id: number;
  image: { medium: string };
  name: string;
  season: number;
  number: number;
}

export interface IFetchAction {
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

export type Action = IFetchAction | IAddFavAction | IRemoveFavAction;
