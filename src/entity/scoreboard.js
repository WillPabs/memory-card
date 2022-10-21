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
    checkNewHighScore() {
        this.setNewHighestScore(this.score);
        this.setNewTypeHighScore(this.score);
    },
    setNewHighestScore(score) {
        if (score > this.highScore) this.highScore = score;
    },
    setNewTypeHighScore(score) {
        if (score > this.typeHighScore) this.typeHighScore = score;
    }
}