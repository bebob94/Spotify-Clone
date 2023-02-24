import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AllCards from "./Components/AllCards";
import MyNavBar from "./Components/MyNavBar";
import Player from "./Components/Player";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MyNavBar />
        <Routes>
          <Route path="/" element={<AllCards />} />
        </Routes>
        <Player />
      </BrowserRouter>
    </div>
  );
}

export default App;
