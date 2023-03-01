import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ArtistPage from "./components/ArtistPage";
import Album from "./components/AlbumPage";

import NavbarComponent from "./components/NavBarComponent";
import Sidebar from "./components/SideBar";

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          {" "}
          <NavbarComponent />
          <Routes>
            <Route path="/" element={<Sidebar />} />

            <Route exact path="/albums/:albumId" element={<Album />} />
            <Route path="/artists/:artistId" element={<ArtistPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
