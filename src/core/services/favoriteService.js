import config from '../../config/api';

function getFavorites() {
  return JSON.parse(localStorage.getItem(config.favoritesKey));
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

export default { getFavorites, setFavorite, removeFavorite };
