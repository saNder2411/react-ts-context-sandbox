import React, { useContext, useEffect, ReactElement } from 'react';
import { Store, IEpisode, ActionTypes } from '../../store';

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
    dispatch({ type: ActionTypes.ADD_FAV, payload: favEpisode });
  };

  console.log(favorites);

  return (
    <>
      <header className="header">
        <h1>Rick and Morty</h1>
        <p>Pick your favorite episode!!!</p>
      </header>
      <section className="episode-layout">
        {episodes.map(
          ({ id, image, name, season, number }: IEpisode): ReactElement => (
            <section key={id} className="episode-box">
              <img src={image.medium} alt={`Rick and Morty ${name}`} />
              <p>name</p>
              <section>
                <div>
                  Season: {season} Number: {number}
                </div>
                <button type="button" onClick={() => toggleFavAction(id)}>
                  Fav
                </button>
              </section>
            </section>
          ),
        )}
      </section>
    </>
  );
};
