import type { IPeopleDataTable } from '@/types'

export const getFavorites = () => {
  return JSON.parse(localStorage.getItem('favorites') as string) || []
}

export const changeFavorite = (item: IPeopleDataTable) => {
  const oldFavorites = getFavorites()
  const newFavorites = []

  if (!item.isFavorite) {
    newFavorites.push(...oldFavorites, item)
  } else {
    const filteredFavorites = oldFavorites.filter(
      (favorite: IPeopleDataTable) => favorite.name !== item.name
    )
    newFavorites.push(...filteredFavorites)
  }

  item.isFavorite = !item.isFavorite
  localStorage.setItem('favorites', JSON.stringify(newFavorites))
}
