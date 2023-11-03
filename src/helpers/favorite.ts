import type { IPeopleData } from '@/types';

export const getFavorites = () => {
  return JSON.parse(localStorage.getItem('favorites') as string) || [];
};

export const changeFavorite = (item: IPeopleData) => {
  const oldFavorites = getFavorites();
  const newFavorites = [];

  if (!item.isFavorite) {
    newFavorites.push(...oldFavorites, item);
  } else {
    const filteredFavorites = oldFavorites.filter(
      (favorite: IPeopleData) => favorite.name !== item.name
    );
    newFavorites.push(...filteredFavorites);
  }

  item.isFavorite = !item.isFavorite;
  localStorage.setItem('favorites', JSON.stringify(newFavorites));
};
