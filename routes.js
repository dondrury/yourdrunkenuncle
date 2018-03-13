'use strict';
import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Layout from './components/Layout';
import Home from './components/Home';
import Merch from './components/Merch';
import NotFoundPage from './components/NotFoundPage';

const routes = (
  <Route path="/" component={Layout} >
      <IndexRoute component={Home} />
      <Route path="merch" component={Merch} />
      <Route path="*" component={NotFoundPage}/>
  </Route>
)


export default routes;
