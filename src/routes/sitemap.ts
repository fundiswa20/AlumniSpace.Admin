import paths from './paths';

export interface SubMenuItem {
  name: string;
  pathName: string;
  path: string;
  active?: boolean;
  items?: SubMenuItem[];
}

export interface MenuItem {
  id: string;
  subheader: string;
  path?: string;
  icon?: string;
  avatar?: string;
  active?: boolean;
  items?: SubMenuItem[];
}

const sitemap: MenuItem[] = [
  {
    id: 'dashboard',
    subheader: 'Dashboard',
    path: '/',
    icon: 'mingcute:home-1-fill',
    active: true,
  },
  {
    id: 'alumni',
    subheader: 'Alumni',
    path: '#!',
    icon: 'mingcute:user-2-fill',
    active: true,
  },
  {
    id: 'donations',
    subheader: 'Donations',
    path: '#!',
    icon: 'carbon:favorite-filled',
    active: true,
  },
  
    {
      id: 'content',
      subheader: 'Content',
      icon: 'mingcute:star-fill',
      items: [
        {
          name: 'Upload Content',
          pathName: 'login',
          path: paths.login,
        },
        {
          name: 'Manage Content',
          pathName: 'signup',
          path: paths.signup,
        },
      ],
    },
  {
    id: 'volunteers',
    subheader: 'Volunteers',
    path: '#!',
    icon: "ic:round-volunteer-activism",
    active: true,
  },
  
  {
    id: 'events',
    subheader: 'Events',
    path: '#!',
    icon: "mdi:event-clock",
    active: true,
  },


];

export default sitemap;
