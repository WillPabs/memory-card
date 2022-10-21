import Card from '../src/entity/card';

test('initialized with all parameters', () => {
    const card = Card('car', 'image', 'ferrari');

    const actual = card;
    const expected = 
        {
            type: 'car',
            image: 'image',
            label: 'ferrari'
        };

    expect(actual).toBe(expected);
});