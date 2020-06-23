import React, { lazy, Suspense, useContext } from 'react';
import { toggleFavAction, Store } from '../store';

const EpisodeList = lazy<any>(() => import('../components/episode-list/EpisodeList'));

export const FavPage = (): JSX.Element => {
  const [{ episodes, favorites }, dispatch] = useContext(Store);
  const onToggleFavClick = toggleFavAction([{ episodes, favorites }, dispatch]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="episode-layout">
        <EpisodeList episodes={favorites} favorites={favorites} onToggleFavClick={onToggleFavClick} />
      </div>
    </Suspense>
  );
};
