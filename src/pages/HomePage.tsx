import React, { lazy, Suspense, useState } from 'react';
import { toggleFavAction } from '../store';
import { useFetch } from '../hooks';

const EpisodeList = lazy<any>(() => import('../components/episode-list/EpisodeList'));

export const HomePage = () => {
  const [url] = useState('https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes');
  const [{ episodes, favorites }, dispatch] = useFetch(url);
  const onToggleFavClick = toggleFavAction([{ episodes, favorites }, dispatch]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <section className="episode-layout">
        <EpisodeList episodes={episodes} favorites={favorites} onToggleFavClick={onToggleFavClick} />
      </section>
    </Suspense>
  );
};
