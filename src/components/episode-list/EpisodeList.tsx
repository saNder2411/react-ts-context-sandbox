import React, { ReactElement } from 'react';
import { IEpisode } from '../../store';

export interface EpisodeListProps {
  episodes: IEpisode[];
  favorites: IEpisode[];
  onToggleFavClick: (id: number) => void;
}

const EpisodeList = ({ episodes, favorites, onToggleFavClick }: EpisodeListProps): Array<JSX.Element> => {
  return episodes.map(
    ({ id, image, name, season, number }: IEpisode): ReactElement => (
      <section key={id} className="episode-box">
        <img src={image.medium} alt={`Rick and Morty ${name}`} />
        <p>name</p>
        <section style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>
            Season: {season} Number: {number}
          </div>
          <button type="button" onClick={() => onToggleFavClick(id)}>
            {favorites.find((fav: IEpisode) => fav.id === id) ? 'UnFav' : 'Fav'}
          </button>
        </section>
      </section>
    ),
  );
};

export default EpisodeList;
