import ComicsGrid from "./components/ComicsGrid";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/App.css";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<ComicsGrid />} />
        <Route path="/list" />
        <Route path="/details/:id" />
      </Routes>
    </Router>
  );
}

export default App;
