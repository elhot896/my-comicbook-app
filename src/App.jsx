import { useState } from "react";
import ComicsList from "./components/ComicsList";
import "./styles/App.css";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <ComicsList />
    </div>
  );
}

export default App;
