const Card = ({ name, imgUrl, onSelect }) => {
    return (
        <figure id={name} onClick={onSelect} className="flex-auto flex-col basis-1/4 m-2 w-full max-w-sm rounded-lg shadow-md bg-gray-800 border-gray-700 cursor-pointer">
            <img src={imgUrl} alt={name} className="flex justify-center object-contain rounded-xl"></img>
            <figcaption className="flex font-bold pb-8 justify-center text-center text-white">{name}</figcaption>
        </figure>
    )
}

export default Card;