import { useEffect, useContext } from 'react';
import { Store, TStore, fetchDataActions } from '../store';

export const useFetch = (url: string): TStore => {
  const [{ episodes, favorites }, dispatch] = useContext<TStore>(Store);

  useEffect(() => {
    if (episodes.length !== 0) return;
    fetchDataActions(url, dispatch);
  }, [url, episodes.length, dispatch]);

  return [{ episodes, favorites }, dispatch];
};
