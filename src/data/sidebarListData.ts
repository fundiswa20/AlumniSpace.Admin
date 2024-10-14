import sitemap from 'routes/sitemap';

export const topListData = sitemap.filter((item) => {
  const id = item.id;
  if (
    id === 'dashboard' ||
    id === 'alumni' ||
    id === 'donations' ||
    id === 'volunteers' ||
    id === 'events' ||
    id === 'content'
  ) {
    return null;
  }
  return item;
});

export const bottomListData = sitemap.filter((item) => {
  const id = item.id;
  if (id !== null) {
    return item;
  }
  return null;
});

export const profileListData = sitemap.find((item) => item.id === 'account-settings');
