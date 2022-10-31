const Card = ({ name, imgUrl, onSelect }) => {
    return (
        <figure id={name} onClick={onSelect} className="cursor-pointer flex flex-col justify-center">
            <img src={imgUrl} alt={name} className="rounded-sm"></img>
            <figcaption className="flex justify-center font-bold">{name}</figcaption>
        </figure>
    )
}

export default Card;