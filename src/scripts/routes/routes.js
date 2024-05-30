import Home from '../views/pages.js/home';
import Favorite from '../views/pages.js/favorite';
import Detail from '../views/pages.js/detail';

const routes = {
  '/': Home,
  '/home': Home,
  '/favorite': Favorite,
  '/detail/:id': Detail,
  './favorite': Favorite,
};

export default routes;
