import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

function Album() {
  const { albumId } = useParams();
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    const fetchTracks = async () => {
      try {
        const response = await fetch(
          `https://striveschool-api.herokuapp.com/api/deezer/album/${albumId}`
        );
        const data = await response.json();
        setTracks(data.tracks.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTracks();
  }, [albumId]);

  return (
    <Container className="FORALBUMS">
      <Row>
        <Col xs={12}>
          <h1>Tracklist</h1>
          <ul>
            {tracks.map((track, index) => (
              <li key={index}>
                {track.title} - {track.artist.name}
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Album;
