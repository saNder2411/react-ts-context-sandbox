import React, { Fragment, useContext } from 'react';
import { Store } from '../../store';
import { Link } from '@reach/router';

interface IAppProps {
  children: JSX.Element[];
  path: string;
}

export const App = ({ children }: IAppProps): JSX.Element => {
  const [{ favorites }] = useContext(Store);

  return (
    <Fragment>
      <header className="header">
        <div>
          <h1>Rick and Morty</h1>
          <p>Pick your favorite episode!!!</p>
        </div>
        <div>
          <Link to="/">Home</Link>
          <Link to="/faves">Favorite(s): {favorites.length}</Link>
        </div>
      </header>
      {children}
    </Fragment>
  );
};

App.defaultProps = {
  path: '/',
};
