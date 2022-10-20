export const scoreboard = (type) => {
    let obj = Object.create(scoreboardFunctions);
    obj.currentScore = 0;
    obj.typeHighScore = type.highScore;
    obj.highScore = 0;
    return obj;
}

const scoreboardFunctions = {
    addScore(num) {
        this.currentScore += num;
    },
    setNewHighScore() {
        if (this.currentScore > this.typeHighScore) this.typeHighScore = this.currentScore;
        if (this.currentScore > this.highScore) this.highScore = this.currentScore;
    }
}