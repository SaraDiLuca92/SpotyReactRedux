import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Home from "./Home";
import SearchBar from "./SearchBar";
import logo from "../logo/Spotify_Logo.png";

const VerticalSidebar = () => {
  return (
    <Container fluid>
      <Row>
        <Col className="bg-black" xs={2} id="sidebar">
          <div className="sidebar">
            <img src={logo} alt="" />
            <ul>
              <li>Home</li>
              <li>Your Library</li>

              <SearchBar />
            </ul>
          </div>
          <div className="but">
            <Button className="white">Sign Up</Button>
            <Button className="black">Login</Button>
          </div>
        </Col>
        <Col xs={10} id="main">
          <div className="main-content">
            <Home />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default VerticalSidebar;
