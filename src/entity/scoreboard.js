const Scoreboard = () => {
    let obj = Object.create(scoreboardFunctions);
    obj.currentScore = 0;
    obj.type = undefined;
    obj.typeHighScore = undefined;
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

export default Scoreboard;