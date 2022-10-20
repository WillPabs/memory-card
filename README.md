## Memory Card Game
- A game in which a user is presented multiple cards, each containing a picture with a label. 
- The user will select one card at a time. For each selection of a consecutively different card, will count as +1 to the total score.
- When an already selected card is chosen, the score will reset to zero. 
- The max score is intially set to 0. It will be set according to the highest previous score. The user will be congratulated upon reaching a new high score.

### Entity

#### Game
- cards
- selectedCards
- selectType(type)
    - a request will be sent to the backend api to retrieve a list of cards for the specified type
- select(card)
    - if card is in selectedCards return false else true

#### Card
- type
- image
- label

#### Scoreboard
- current score
- type high score
- highest score
- addScore(num)
    - current score will be incremented by num
- setNewHighScore(score, type)
    - if score is greater than type high score, set type high score to score
    - if score is greater than highest score, set highest score to score

### API
- each endpoint will send a get request to the corresponding url to retrieve a list of data limited to 15. The required data will be converted to a list of Card objects. Those objects will be passed to the Game object.

#### Cars Endpoint

#### Shoes Endpoint

#### Dogs Endpoint

- The user will be prompted to select the type of cards they want to play the game with (e.g. cars, celebs, shoes, etc). Based upon the selection, a request will be sent to a certain api that returns a list of images and descriptions about each item in the list of that type. That selection will be displayed in a grid format.