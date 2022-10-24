import { getPokemonData } from "../src/api/api";

describe('Pokemon Data', () => {
    it('returns corresponding data', () => {
        const data = getPokemonData();
        console.log(data);
    })
})