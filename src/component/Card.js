const Card = ({ name, imgUrl, onSelect }) => {
    return (
        <figure id={name} onClick={onSelect}>
            <img src={imgUrl} alt={name}></img>
            <figcaption>{name}</figcaption>
        </figure>
    )
}

export default Card;