export function addFavoriteSong(song) {
  return {
    type: "ADD_FAVORITE_SONG",
    payload: song,
  };
}
export function removeFavoriteSong(song) {
  return {
    type: "REMOVE_FAVORITE_SONG",
    payload: song,
  };
}
