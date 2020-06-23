import React, { lazy, Suspense, useState } from 'react';
import { IEpisode, ActionTypes } from '../store';
import { useFetch } from '../hooks';

const EpisodeList = lazy<any>(() => import('../components/episode-list/EpisodeList'));

export const HomePage = () => {
  const [url] = useState('https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes');
  const [{ episodes, favorites }, dispatch] = useFetch(url);

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

    if (favEpisode) {
      dispatch({ type: ActionTypes.ADD_FAV, payload: favEpisode });
    }
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <section className="episode-layout">
        <EpisodeList episodes={episodes} favorites={favorites} toggleFavAction={toggleFavAction} />
      </section>
    </Suspense>
  );
};
