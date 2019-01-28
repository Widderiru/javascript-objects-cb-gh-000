var playlist = {firstSong: "Smoorverliefd"}

function updatePlaylist(playlist, artistName, songTitle) {
  Object.assign({}, playlist, {artistName: songTitle})
}
