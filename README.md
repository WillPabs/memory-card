## Memory Card Game
- A game in which a user is presented multiple cards, each containing a picture with a label. 
- The user will select one card at a time. For each selection of a consecutively different card, will count as +1 to the total score.
- When an already selected card is chosen, the score will reset to zero. 
- The max score is intially set to 0. It will be set according to the highest previous score. The user will be congratulated upon reaching a new high score.

### Entity

#### Card
- type
- image
- label

#### Scoreboard
- current score
- type high score
- highest score

- The user will be prompted to select the type of cards they want to play the game with (e.g. cars, celebs, shoes, etc). Based upon the selection, a request will be sent to a certain api that returns a list of images and descriptions about each item in the list of that type. That selection will be displayed in a grid format.