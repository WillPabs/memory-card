const Card = ({ name, imgUrl, onSelect }) => {
    return (
        <figure id={name} onClick={onSelect} className="cursor-pointer flex flex-none flex-col items-center justify-center">
            <img src={imgUrl} alt={name} className="flex max-w-lg"></img>
            <figcaption className="flex font-bold">{name}</figcaption>
        </figure>
    )
}

export default Card;