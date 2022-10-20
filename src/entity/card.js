export const card = (type, image, label) => {
    let obj = Object.create();
    obj.type = type;
    obj.image = image;
    obj.label = label;
    return obj
}