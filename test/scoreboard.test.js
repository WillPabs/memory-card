import Scoreboard from "../src/entity/scoreboard";

let board;

beforeEach(() => { 
    board = Scoreboard(); 
});

test('initialized with current score as 0', () => {
    const actual = board.currentScore;
    const expected = 0;
    
    expect(actual).toEqual(expected);
});

test('initialized with highestScore as 0', () => {
    const actual = board.highScore;
    const expected = 0;

    expect(actual).toBe(expected);
});

test('initialized with type as undefined', () => {
    const actual = board.type;
    const expected = undefined;

    expect(actual).toEqual(expected);
});

test('initialized with typeHighScore as undefined', () => {
    const actual = board.typeHighScore;
    const expected = undefined;

    expect(actual).toBe(expected);
});


test('addScore increments currentScore by num parameter', () => {
    board.addScore(1);

    const actual = board.currentScore;
    const expected = 1;

    expect(actual).toBe(expected);
});


