import axios from "axios";

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
            const imgUrl = objResponse.data.sprites.front_default;
            const pokemon = { name, imgUrl }
            pokemen.push(pokemon);
        }
        return await pokemen;
    } catch (error) {
        console.log(error);
    }
}

const getAnimalsData = async () => {

}

const getDisneyCharactersData = async () => {

}

export {
    getPokemonData,
    getAnimalsData,
    getDisneyCharactersData
};