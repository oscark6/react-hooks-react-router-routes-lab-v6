import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Movie from './pages/Movie';
import Directors from './pages/Directors';
import Actors from './pages/Actors';
import ErrorPage from './pages/ErrorPage';

const routes = (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/movie/:id" component={Movie} />
      <Route exact path="/directors" component={Directors} />
      <Route exact path="/actors" component={Actors} />
      <Route component={ErrorPage} />
    </Switch>
  </BrowserRouter>
);

export default routes;
