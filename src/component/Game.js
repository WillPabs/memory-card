import { useState } from "react"
import { getAnimalsData, getPokemonData } from "../api/api";
import Cards from "./Cards";
import Dropdown from "./Dropdown";
import Scoreboard from "./Scoreboard";

const Game = () => {
    const [cards, setCards] = useState([]);
    const [selectedCards, setSelectedCards] = useState([]);
    const [score, setScore] = useState(0);
    const [typeHighScore, setTypeHighScore] = useState(0);
    const [highScore, setHighScore] = useState(0);
    const [types, setTypes] = useState(['pokemon', 'animals', 'disney']);
    const [selectedType, setSelectedType] = useState('');

    const selectType = async (e) => {
        const type = e.target.textContent;
        let newCards;
        if (type === 'pokemon') {
            newCards = await getPokemonData();
        } else if (type === 'animals') {
            newCards = await getAnimalsData();
        }
        setSelectedType(type);
        setCards(newCards);
    };

    const select = (e) => {
        const name = e.target.parentNode.id;
        if (selectedCards.includes(name)) {
            if (score > highScore) setHighScore(score);
            if (score > typeHighScore) setTypeHighScore(score);
            setScore(0)
            setSelectedCards([])
        } else {
            setScore(score + 1);
            setSelectedCards([...selectedCards, name]);
        }
        shuffle();
    };

    const shuffle = () => {
        for (let i = cards.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = cards[i];
            cards[i] = cards[j];
            cards[j] = temp;
        }
    }

    return (
        <div className="flex flex-col px-5 self-center justify-items-center">
            <Dropdown types={types} onSelect={selectType}></Dropdown>
            <Scoreboard score={score} typeHighScore={typeHighScore} highScore={highScore} type={selectedType}></Scoreboard>
            <Cards cards={cards} onSelect={select}></Cards>
        </div>
    )
}

export default Game;