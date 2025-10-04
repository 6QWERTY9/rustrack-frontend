/* // src/routes/routes.ts
import { RouteObject } from 'react-router-dom'; // Импорт типа из react-router-dom
import { ROUTE_PATHS } from './routesPath';
import Home from '../pages/Home'; // Импорты страниц
import Catalog from '../pages/Catalog';
import About from '../pages/About';

// Определяем тип для маршрута с мета-информацией
interface RouteMeta {
  title?: string;
  description?: string;
}

interface AppRoute extends Omit<RouteObject, 'children'> {
  meta?: RouteMeta;
}

// Массив маршрутов
export const routes: AppRoute[] = [
  {
    path: ROUTE_PATHS.HOME,
    element: <Home />,
    meta: { title: 'Главная', description: 'Добро пожаловать на сайт' },
  },
  {
    path: ROUTE_PATHS.CATALOG,
    element: <Catalog />,
    meta: { title: 'Каталог', description: 'Список товаров' },
  },
  {
    path: ROUTE_PATHS.ABOUT,
    element: <About />,
    meta: { title: 'О нас', description: 'Информация о компании' },
  },
  // Добавь новые маршруты сюда, например:
  // {
  //   path: ROUTE_PATHS.CONTACT,
  //   element: <Contact />,
  //   meta: { title: 'Контакты' },
  // },
]; */