import { useState } from "react"
import { getAnimalsData, getDisneyCharactersData, getPokemonData } from "../api/api";
import Type from "../entity/type";
import Cards from "./Cards";
import Dropdown from "./Dropdown";
import Scoreboard from "./Scoreboard";

const Game = () => {
    const pokemon = Type('pokemon', 0);
    const animals = Type('animals', 0);
    const disney = Type('disney', 0);
    const [cards, setCards] = useState([]);
    const [selectedCards, setSelectedCards] = useState([]);
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);
    const [types, setTypes] = useState([pokemon, animals, disney]);
    const [selectedType, setSelectedType] = useState({});

    const selectType = async (e) => {
        const type = e.target.textContent;
        let newCards;
        if (type === 'pokemon') {
            newCards = await getPokemonData();
            setSelectedType(types[0]);
        } else if (type === 'animals') {
            newCards = await getAnimalsData();
            setSelectedType(types[1]);
        } else if (type === 'disney') {
            newCards = await getDisneyCharactersData();
            setSelectedType(types[2]);
        }
        setScore(0);
        setCards(newCards);
    };

    const select = (e) => {
        const name = e.target.parentNode.id;
        if (selectedCards.includes(name)) {
            if (score > highScore) setHighScore(score);
            if (score > selectedType.highScore) selectedType.setHighScore(score);
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
        <div className="flex flex-col px-20 self-center justify-items-center">
            <Dropdown types={types} onSelect={selectType}></Dropdown>
            <Scoreboard score={score} typeHighScore={selectedType.highScore} highScore={highScore} type={selectedType.name}></Scoreboard>
            <Cards cards={cards} onSelect={select}></Cards>
        </div>
    )
}

export default Game;