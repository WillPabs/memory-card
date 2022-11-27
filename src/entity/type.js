const Type = (name, highScore) => {
    let obj = Object.create(typeFunctions);
    obj.name = name;
    obj.highScore = highScore;
    return obj;
}

const typeFunctions = {
    setHighScore(score) {
        this.highScore = score;
    }
}

export default Type;