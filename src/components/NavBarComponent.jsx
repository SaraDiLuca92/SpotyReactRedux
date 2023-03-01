import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavbarComponent() {
  return (
    <>
      <div className="divnav">
        <Nav.Link href="#home">TRENDING</Nav.Link>
        <Nav.Link href="#features">MOODS AND GENRES</Nav.Link>
        <Nav.Link href="#pricing">NEW RELEASES</Nav.Link>
        <Nav.Link href="#pricing">DISCOVER</Nav.Link>
      </div>
    </>
  );
}

export default NavbarComponent;
