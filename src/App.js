import "./App.css";
import axios from "axios";
// Routing
import { Route, Routes } from "react-router-dom";
// React slick css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// Pages
import HomePage from "./pages/Home.page";
import MoviePage from "./pages/Movie.page";
import TVShowPage from "./pages/TVShow.page";
import Login from "./components/Navbar/Login";
import Signup from "./components/Navbar/Signup";
import NoPage from "./pages/NoPage.page";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {};
axios.defaults.params["api_key"] = "c6e58fb8f5627c00e3d12e5fb4203726";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/movie/:id" element={<MoviePage />} />
      <Route path="/tv" element={<TVShowPage />} />
      <Route path="*" element={<NoPage/>} />
    </Routes>
  );
}

export default App;
