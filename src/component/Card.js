const Card = ({ name, imgUrl }) => {
    return (
        <figure id={name}>
            <img src={imgUrl} alt={name}></img>
            <figcaption>{name}</figcaption>
        </figure>
    )
}

export default Card;