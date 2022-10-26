const Scoreboard = ({ score, typeHighScore, highScore, type }) => {
    const typeHSDiv = type ? 
        <div id="type-high-score">{type} High Score: {typeHighScore}</div>
        :
        <div></div>;
    return (
        <div>
            <div id="score">Score: {score}</div>
            {typeHSDiv}
            <div id="high-score">High Score: {highScore}</div>
        </div>
    )
}

export default Scoreboard;