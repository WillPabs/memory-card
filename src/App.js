import { useState } from 'react';
import { getPokemonData } from './api/api';

function App() {
  const [data, setData] = useState([]);

  const getData =  async () => {
      const pokemonData = await getPokemonData();
      setData(pokemonData);
  }

  return (
    <div className="App">
      <button onClick={getData}>Get Pokemon Data</button>
      {data.map(card => {
        return(
          <div key={card.name}>
            {card.name}
            <img src={card.imgUrl} alt={card.name}/>
          </div>
        )
      })}
    </div>
  );
}

export default App;
