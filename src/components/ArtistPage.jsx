import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
function ArtistPage() {
  const { artistId } = useParams();
  const [artistInfo, setArtistInfo] = useState({});
  const [artistAlbums, setArtistAlbums] = useState([]);

  useEffect(() => {
    const fetchArtistInfo = async () => {
      try {
        const response = await fetch(
          `https://striveschool-api.herokuapp.com/api/deezer/artist/${artistId}`
        );
        const data = await response.json();
        setArtistInfo(data);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchArtistAlbums = async () => {
      try {
        const response = await fetch(
          `https://striveschool-api.herokuapp.com/api/deezer/artist/${artistId}/albums`
        );
        const data = await response.json();
        setArtistAlbums(data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchArtistInfo();
    fetchArtistAlbums();
  }, [artistId]);

  return (
    <Container className=" artist my-5">
      <Row>
        <Col xs={12} md={4}>
          <Image src={artistInfo.picture_big} rounded fluid />
        </Col>
        <Col xs={12} md={8}>
          <h2>{artistInfo.name}</h2>
          <p>{artistInfo.nb_fan} fans</p>
          <p>{artistInfo.nb_album} albums</p>
          <p>{artistInfo.nb_fan} fans</p>
          <p>{artistInfo.nb_fan} fans</p>
        </Col>
      </Row>
      <hr />
      <h3>Albums</h3>
      <Row>
        {artistAlbums &&
          artistAlbums.map((album, index) => (
            <Col key={index} xs={12} md={3}>
              <div>
                <img src={album.cover_big} alt={album.title} />
                <Link to={`/albums/${album.id}`}>{album.title}</Link>
              </div>
            </Col>
          ))}
      </Row>
    </Container>
  );
}

export default ArtistPage;
