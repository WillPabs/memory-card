import Card from "./Card";

const Cards = ({ cards }) => {
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