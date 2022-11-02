const Card = ({ name, imgUrl, onSelect }) => {
    return (
        <figure id={name} onClick={onSelect} className="flex flex-col m-2 align-center w-full max-w-sm rounded-lg shadow-md bg-gray-800 border-gray-700 cursor-pointer">
            <img src={imgUrl} alt={name} className="flex m-8 rounded-xl"></img>
            <figcaption className="flex font-bold pb-8 justify-center text-white">{name}</figcaption>
        </figure>
    )
}

export default Card;