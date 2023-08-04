import { useState, useEffect } from "react";
import { getAllStarships } from "./services/sw-api";
import StarshipCard from "./components/StarshipCard";
import "./App.css";

function App() {
  //Hold the starship objects in state with the useState hook, don't forget to initialize to an empty array!
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllStarships();
      setStarships(data.results);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      {starships.map((starship) => (
        <StarshipCard key={starships.name} starship={starship} />
      ))}
    </div>
  );
}

export default App;
