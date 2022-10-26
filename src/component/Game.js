import { useState } from "react"
import { getPokemonData } from "../api/api";
import Cards from "./Cards";
import Dropdown from "./Dropdown";
import Scoreboard from "./Scoreboard";

const Game = () => {
    const [cards, setCards] = useState([]);
    const [selectedCards, setSelectedCards] = useState([]);
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);
    const [types, setTypes] = useState(['pokemon', 'animals', 'disney']);
    const [selectedType, setSelectedType] = useState('');

    const selectType = async (e) => {
        const type = e.target.textContent;
        let newCards;
        if (type === 'pokemon') {
            newCards = await getPokemonData();
        }
        setSelectedType(type);
        setCards(newCards);
    };

    const select = () => {

    };

    const shuffle = () => {

    }

    return (
        <div>
            <Dropdown types={types} onSelect={selectType}></Dropdown>
            <Scoreboard score={score} highScore={highScore} type={selectedType}></Scoreboard>
            <Cards cards={cards}></Cards>
        </div>
    )
}

export default Game;