import Card from '../src/entity/card';

test('initialized with all parameters', () => {
    let card = Card(25, 'car', 'image', 'ferrari');

    const actual = card;
    const expected = 
        {
            id: 25,
            type: 'car',
            image: 'image',
            label: 'ferrari'
        };

    expect(actual).toEqual(expected);
});