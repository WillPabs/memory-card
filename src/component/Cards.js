import Card from "./Card";

const Cards = (props) => {
    const { cards } = props;
    return (
        <ul>
            {cards.map(card => {
                return (
                    <Card key={card.name} name={card.name} imgUrl={card.imgUrl}></Card>
                )
            })}
        </ul>
    )
}

export default Cards;