import { useEffect, useContext } from 'react';
import { Store, TStore, ActionTypes } from '../store';

export const useFetch = (url: string): TStore => {
  const [{ episodes, favorites }, dispatch] = useContext<TStore>(Store);

  useEffect(() => {
    if (episodes.length !== 0) return;

    const fetchData = async () => {
      const data = await fetch(url);
      const dataJSON = await data.json();
      dispatch({ type: ActionTypes.FETCH_DATA, payload: dataJSON._embedded.episodes });
    };

    fetchData();
  }, [url, episodes.length, dispatch]);

  return [{ episodes, favorites }, dispatch];
};
