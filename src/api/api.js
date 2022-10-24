import axios from "axios";

const getPokemonData = async () => {
    let offset = Math.floor(Math.random() * 1134);
    const url = `https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offset}`;
    try {
        const response = await axios.get(url);
        const data = await response.data.results;
        return await data;
    } catch (error) {
        console.log(error);
    }

    // try {
    //     axios.get(url)
    //         .then(response => response.data.results)
    //         .then(data => {
    //             // console.log(data);
    //             return data;
    //         });
    // } catch (error) {
    //     console.log(error);
    // }
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