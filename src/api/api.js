import axios from "axios";
import Card from "../entity/card";

const getPokemonData = async () => {
    let offset = Math.floor(Math.random() * 1134);
    const url = `https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offset}`;
    try {
        const response = await axios.get(url);
        const data = await response.data.results;
        let pokemen = [];
        for await (let obj of data) {
            const objResponse = await axios.get(obj.url);
            const name = objResponse.data.name;
            let imgUrl;
            if (objResponse.data.sprites.front_default) {
                imgUrl = objResponse.data.sprites.front_default;
            } else {
                imgUrl = objResponse.data.sprites.other['official-artwork'].front_default;
            }
            const pokemon = Card(name, 'pokemon', imgUrl, name);
            pokemen.push(pokemon);
        }
        return pokemen;
    } catch (error) {
        console.log(error);
    }
}

const getAnimalsData = async () => {
    const url = 'https://zoo-animal-api.herokuapp.com/animals/rand/10';
    try {
        const response = await axios.get(url);
        const data = await response.data;
        let animals = [];
        for (let obj of data) {
            const animal = Card(obj.name, 'animals', obj.image_link, obj.name);
            animals.push(animal);
        }
        return animals;
    } catch (error) {
        console.log(error);
    }
}

const getDisneyCharactersData = async () => {
    const page = Math.floor(Math.random() * 147);
    const indexStart = Math.floor(Math.random() * 30);
    const url = `https://api.disneyapi.dev/characters?page=${page}`;
    try {
        const response = await axios.get(url);
        const data = await response.data.data.splice(indexStart, 20);
        let characters = [];
        for (let obj of data) {
            const character = Card(obj._id, 'disney', obj.imageUrl, obj.name);
            characters.push(character);
        }
        return characters;
    } catch (error) {
        console.log(error);
    }
}

export {
    getPokemonData,
    getAnimalsData,
    getDisneyCharactersData
};