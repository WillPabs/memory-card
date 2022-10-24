const Card = (type, image, label) => {
    let obj = Object.create(cardFunctions);
    obj.type = type;
    obj.image = image;
    obj.label = label;
    return obj
}

const cardFunctions = {}

export default Card;