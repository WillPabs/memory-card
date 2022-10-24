import { getPokemonData } from './api/api';

const data = getPokemonData();
console.log(data)
const poke = 
  <div>
    {data.map((element) => {
      return (
        <div>
          {element}
        </div>
      )
    })}
  </div>

function App() {
  return (
    <div className="App">
      {poke}
    </div>
  );
}

export default App;
