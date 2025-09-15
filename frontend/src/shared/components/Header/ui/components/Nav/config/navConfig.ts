export interface INavItem {
  id: string;
  title: string;
  path: string;
  selectID: string;
}

// Генерируем ID один раз при импорте (можно сделать вручную или через скрипт)
export const navConfig: INavItem[] = [
  { id: 'nav-1', title: 'О нас', path: '/', selectID: 'about' },
  { id: 'nav-2', title: 'Медиа', path: '/', selectID: 'media' },
  { id: 'nav-3', title: 'Сервис', path: '/service', selectID: 'service' },
  { id: 'nav-4', title: 'Новости', path: '/news', selectID: 'news' },
  { id: 'nav-5', title: 'Контакты', path: '/contacts', selectID: 'contacts' },
];