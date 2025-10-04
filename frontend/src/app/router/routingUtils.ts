import { ROUTE_PATHS,  type RoutePath } from './routesPath';

// Функция для проверки, является ли путь активным (для навигации)
export const isActiveRoute = (currentPath: string, routePath: RoutePath): boolean => {
  return currentPath === routePath;
};

// Функция для генерации полного URL с параметрами (если нужно)
export const buildRoute = (path: RoutePath, params?: Record<string, string>): string => {
  let url = path;
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      url = url.replace(`:${key}`, value);
    });
  }
  return url;
};