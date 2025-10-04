export const ROUTE_PATHS = {
  HOME: '/',
  CATALOG: '/catalog',
  ABOUT: '/about',
  CONTACT: '/contact',  // Добавлено
} as const;

export type RoutePath = typeof ROUTE_PATHS[keyof typeof ROUTE_PATHS];