import { useState, useEffect } from "react";
import { getAllStarships } from "./services/sw-api";
import StarshipCard from "./components/StarshipCard";
import "./App.css";
import Header from "./components/Header";

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
      <Header />
      <div className="cards">
        {starships.map((starship) => (
          <StarshipCard key={starship.name} starship={starship} />
        ))}
      </div>
    </div>
  );
}

export default App;
