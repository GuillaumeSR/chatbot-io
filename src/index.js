import Router from './Router';
import Home from './controllers/Home';

import './index.scss';

const routes = [{
  url: '/home',
  controller: Home
}];

new Router(routes);
