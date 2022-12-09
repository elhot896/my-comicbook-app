import ComicsGrid from "./components/ComicsGrid";
import ComicsList from "./components/ComicsList";
import ComicDetails from "./components/ComicDetails";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/App.css";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<ComicsGrid />} />
        <Route path="/list" element={<ComicsList />} />
        <Route path="/details/:id" element={<ComicDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
