import { useState } from "react";
import { GetListComics } from "./services/comic-service";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  GetListComics().then((res) => {
    console.log(res.data.results);
  });
  return <div className="App"></div>;
}

export default App;
