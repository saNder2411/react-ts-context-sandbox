import React, { useContext, useEffect, lazy, Suspense } from 'react';
import { Store, IEpisode, ActionTypes } from '../../store';

const EpisodeList = lazy<any>(() => import('../episode-list/EpisodeList'));

export const App = (): JSX.Element => {
  const [{ episodes, favorites }, dispatch] = useContext(Store);

  useEffect(() => {
    const fetchDataAction = async () => {
      const data = await fetch('https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes');
      const dataJSON = await data.json();
      dispatch({ type: ActionTypes.FETCH_DATA, payload: dataJSON._embedded.episodes });
    };
    episodes.length === 0 && fetchDataAction();
  }, [episodes.length, dispatch]);

  const toggleFavAction = (id: number): void => {
    const favEpisode = episodes.find((episode: IEpisode): boolean => id === episode.id);
    let inFavEpisode = false;

    if (favEpisode) {
      inFavEpisode = favorites.includes(favEpisode);
    }

    if (inFavEpisode) {
      const episodesWithoutFav = favorites.filter((favEpisode: IEpisode): boolean => favEpisode.id !== id);
      dispatch({ type: ActionTypes.REMOVE_FAV, payload: episodesWithoutFav });
      return;
    }

    dispatch({ type: ActionTypes.ADD_FAV, payload: favEpisode });
  };

  return (
    <>
      <header className="header">
        <div>
          <h1>Rick and Morty</h1>
          <p>Pick your favorite episode!!!</p>
        </div>
        <div>Favorite(s): {favorites.length}</div>
      </header>
      <Suspense fallback={<div>Loading...</div>}>
        <section className="episode-layout">
          <EpisodeList episodes={episodes} favorites={favorites} toggleFavAction={toggleFavAction} />
        </section>
      </Suspense>
    </>
  );
};
