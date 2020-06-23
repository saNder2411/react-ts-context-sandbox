import { ActionTypes, IEpisode } from './types';
import { TStore, TDispatch } from './Store';

export const fetchDataActions = async (url: string, dispatch: TDispatch) => {
  const data = await fetch(url);
  const dataJSON = await data.json();
  dispatch({ type: ActionTypes.FETCH_DATA, payload: dataJSON._embedded.episodes });
};

export const toggleFavAction = ([{ episodes, favorites }, dispatch]: TStore) => (id: number): void => {
  const favEpisode = episodes.find((episode: IEpisode): boolean => id === episode.id)! as IEpisode;
  let inFavEpisode = favorites.includes(favEpisode);

  if (inFavEpisode) {
    const episodesWithoutFav = favorites.filter((favEpisode: IEpisode): boolean => favEpisode.id !== id);
    dispatch({ type: ActionTypes.REMOVE_FAV, payload: episodesWithoutFav });
    return;
  }

  dispatch({ type: ActionTypes.ADD_FAV, payload: favEpisode });
};
