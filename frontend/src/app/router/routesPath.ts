export const ROUTE_PATHS = {
  HOME: '/',
  CATALOG: '/catalog',
  ABOUT: '/about',
  CONTACT: '/contact',  // Добавлено
  NEWS: '/news',
} as const;

// Динамические пути (функции, основанные на базовых)
export const routesPath = {
  ...ROUTE_PATHS,  // Включаем базовые для удобства
  CATEGORYID: (categoryId: string) => `${ROUTE_PATHS.CATALOG}/${categoryId}`,
  NEWSID: (newsId: string) => `${ROUTE_PATHS.NEWS}/${newsId}`,
} as const;

export type RoutePath = typeof ROUTE_PATHS[keyof typeof ROUTE_PATHS];