import React, { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

function SearchBar() {
  const [query, setQuery] = useState("");
  const [tracks, setTracks] = useState([]);
  const [selectedTrack, setSelectedTrack] = useState(null);

  const handleSearch = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`
      );
      const data = await response.json();
      setTracks(data.data);
      setSelectedTrack(null);
    } catch (error) {
      console.error(error);
    }
  };

  const handleTrackSelect = (track) => {
    setSelectedTrack(track);
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <div className="form-group">
          <label htmlFor="search-query"></label>
          <div className="insieme">
            <input
              type="text"
              id="search-query"
              className="form-control"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />

            <button type="submit" className="btn btn-primary">
              GO
            </button>
          </div>{" "}
        </div>
      </form>
      {selectedTrack && (
        <div className="music-player card">
          <div className="card-body">
            <h2 className="card-title">{selectedTrack.title}</h2>
            <p className="card-text">Artist: {selectedTrack.artist.name}</p>
            <p className="card-text">Album: {selectedTrack.album.title}</p>
          </div>
          <div className="card-footer">
            <button className="btn btn-secondary">
              <i className="fas fa-backward"></i>
            </button>
            <button className="btn btn-primary">
              <i className="fas fa-play"></i>
            </button>
            <button className="btn btn-primary">
              <i className="fas fa-pause"></i>
            </button>
            <button className="btn btn-secondary">
              <i className="fas fa-forward"></i>
            </button>
          </div>
          <audio controls src={selectedTrack.preview}></audio>
        </div>
      )}
      <ul className="list-group mt-3">
        {tracks.map((track) => (
          <li key={track.id} className="list-group-item">
            <button
              type="button"
              className="btn btn-link"
              onClick={() => handleTrackSelect(track)}
            >
              {track.title}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default SearchBar;
