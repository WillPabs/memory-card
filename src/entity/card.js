const Card = (id, type, image, label) => {
    let obj = Object.create(cardFunctions);
    obj.id = id;
    obj.type = type;
    obj.image = image;
    obj.label = label;
    return obj;
}

const cardFunctions = {}

export default Card;