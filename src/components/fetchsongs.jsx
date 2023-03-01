import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import {
  addFavoriteSong,
  removeSongFromFavorites,
} from "./redux/FavouriteSongReducer";

function FetchComponent({ query }) {
  const [songs, setSongs] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const response = await fetch(
          `https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`
        );
        const data = await response.json();
        const songs = data.data.slice(0, 4); // extract first 4 songs from the response
        setSongs(songs);
      } catch (error) {
        console.error(error);
      }
    };

    fetchSongs();
  }, []);

  const handleAddToFavorites = (song) => {
    dispatch(addFavoriteSong(song));
  };

  const handleRemoveFromFavorites = (songId) => {
    dispatch(removeSongFromFavorites(songId));
  };

  return (
    <Container className="FORSONGS">
      <Row>
        {songs &&
          songs.map((song, index) => (
            <Col key={index} xs={12} md={3}>
              <div>
                {" "}
                <img src={song.album.cover} alt={song.album.title} />
                <Link to={`/albums/${song.album.id}`}>
                  <h3>{song.album.title}</h3>
                </Link>
                <Link to={`/artists/${song.artist.name}`}>
                  <h4> {song.artist.name}</h4>
                </Link>
                {song.isFavorite ? (
                  <Button
                    variant="danger"
                    onClick={() => handleRemoveFromFavorites(song.id)}
                  >
                    Remove from Favorites
                  </Button>
                ) : (
                  <Button
                    variant="success"
                    onClick={() => handleAddToFavorites(song)}
                  >
                    Add to Favorites
                  </Button>
                )}
              </div>
            </Col>
          ))}
      </Row>
    </Container>
  );
}

export default FetchComponent;
