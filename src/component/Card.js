const Card = ({ name, imgUrl, onSelect }) => {
    return (
        <figure id={name} onClick={onSelect} className="col-span-1 basis-1/4 m-2 max-w-sm align-items justify-between rounded-lg shadow-md bg-gray-800 border-gray-700 cursor-pointer">
            <img src={imgUrl} alt={name} className="mx-auto rounded-lg"></img>
            <figcaption className="flex font-bold pb-8 justify-center text-center text-white">{name}</figcaption>
        </figure>
    )
}

export default Card;