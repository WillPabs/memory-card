import { useState } from 'react';
import { getPokemonData } from './api/api';
import Cards from './component/Cards';

function App() {
  const [data, setData] = useState([]);

  const getData = async () => {
      const pokemonData = await getPokemonData();
      setData(pokemonData);
  }

  return (
    <div className="App">
      <button onClick={getData}>Get Pokemon Data</button>
      <Cards cards={data}></Cards>
    </div>
  );
}

export default App;
