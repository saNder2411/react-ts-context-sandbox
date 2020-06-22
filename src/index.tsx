import React from 'react';
import ReactDOM from 'react-dom';
import { Router, RouteComponentProps } from '@reach/router';
import './index.css';
import { App } from './components';
import { StoreProvider } from './store';
import { HomePage } from './pages';
import { FavPage } from './pages';

const RouterPage = (props: { pageComponent: JSX.Element } & RouteComponentProps) => props.pageComponent;

ReactDOM.render(
  <StoreProvider>
    <Router>
      <App path="/">
        <RouterPage pageComponent={<HomePage />} path="/" />
        <RouterPage pageComponent={<FavPage />} path="/faves" />
      </App>
    </Router>
  </StoreProvider>,
  document.getElementById('root'),
);
