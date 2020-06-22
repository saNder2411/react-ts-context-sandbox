import React, { useContext } from 'react';
import { Store } from '../../store';

export const App = (): JSX.Element => {
  const context = useContext(Store);
  return (
    <>
      <div>{}</div>
    </>
  );
};
