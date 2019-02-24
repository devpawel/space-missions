import config from '../../config/api';

function getFavorites() {
  const storage = JSON.parse(localStorage.getItem(config.favoritesKey));

  if (!storage) {
    localStorage.setItem(config.favoritesKey, JSON.stringify([]));
    return [];
  }

  return storage;
}

function setFavorite(launch) {
  const favorites = this.getFavorites();

  if (favorites) {
    const launchExists = favorites.some(favorite => favorite.id === launch.id);

    if (launchExists) {
      return;
    }
  }

  if (!favorites) {
    localStorage.setItem(config.favoritesKey, JSON.stringify([launch]));
  } else {
    localStorage.setItem(config.favoritesKey, JSON.stringify([...favorites, launch]));
  }
}

function removeFavorite(launch) {
  const favorites = this.getFavorites();
  const filteredFavorites = favorites.filter(favorite => favorite.id !== launch.id);
  localStorage.setItem(config.favoritesKey, JSON.stringify(filteredFavorites));
}

function isFavorite(launch) {
  const favorites = this.getFavorites();
  return favorites.some(favorite => favorite.id === launch.id);
}

export default { getFavorites, setFavorite, removeFavorite, isFavorite };
