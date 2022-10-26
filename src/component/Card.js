const Card = (props) => {
    const { name, imgUrl } = props;

    return (
        <figure id={name}>
            <img src={imgUrl} alt={name}></img>
            <figcaption>{name}</figcaption>
        </figure>
    )
}

export default Card;