import React, { useContext, useEffect, ReactElement } from 'react';
import { Store, IEpisode } from '../../store';

export const App = (): JSX.Element => {
  const [{ episodes }, dispatch] = useContext(Store);

  useEffect(() => {
    const fetchDataAction = async () => {
      const data = await fetch('https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes');
      const dataJSON = await data.json();
      dispatch({ type: 'FETCH_DATA', payload: dataJSON._embedded.episodes });
    };
    episodes.length === 0 && fetchDataAction();
  }, [episodes.length, dispatch]);

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
                Season: {season} Number: {number}
              </section>
            </section>
          ),
        )}
      </section>
    </>
  );
};
