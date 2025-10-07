import type { RoutePath } from "./routesPath";


// Функция для проверки, является ли путь активным (для навигации)
export const isActiveRoute = (currentPath: string, routePath: RoutePath): boolean => {
  return currentPath === routePath;
};



