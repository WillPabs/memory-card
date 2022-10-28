const Card = ({ name, imgUrl, onSelect }) => {
    return (
        <figure id={name} onClick={onSelect} className="cursor-pointer">
            <img src={imgUrl} alt={name} className="rounded-sm"></img>
            <figcaption>{name}</figcaption>
        </figure>
    )
}

export default Card;