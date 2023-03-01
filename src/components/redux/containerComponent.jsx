import { connect } from "react-redux";
import { addFavoriteSong, removeFavoriteSong } from "./actions";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap";
import Col from "react-bootstrap";
import { Link } from "react-router-dom";
function FetchContainer({ query, songs, addFavoriteSong, removeFavoriteSong }) {
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
                <button onClick={() => addFavoriteSong(song)}>
                  Add to Favorites
                </button>
                <button onClick={() => removeFavoriteSong(song)}>
                  Remove from Favorites
                </button>
              </div>
            </Col>
          ))}
      </Row>
    </Container>
  );
}

const mapStateToProps = (state) => ({
  favoriteSongs: state.favoriteSongs,
});

export default connect(mapStateToProps, {
  addFavoriteSong,
  removeFavoriteSong,
})(FetchContainer);
