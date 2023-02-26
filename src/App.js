import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Album from "./Components/Album";
import AllCards from "./Components/AllCards";
import Artist from "./Components/Artist";
import Favourite from "./Components/Favourite";
import MyNavBar from "./Components/MyNavBar";
import Player from "./Components/Player";
import SearchResaults from "./Components/SearchResults";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MyNavBar />
        <Routes>
          <Route path="/" element={<AllCards />} />
          <Route path="/Album" element={<Album />} />
          <Route path="/Artist" element={<Artist />} />
          <Route path="/SearchResults" element={<SearchResaults />} />
          <Route path="/Favourite" element={<Favourite />} />
        </Routes>
        <Player />
      </BrowserRouter>
    </div>
  );
}

export default App;
