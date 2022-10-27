import Card from "./Card";

const Cards = ({ cards, onSelect }) => {
    return (
        <ul>
            {cards.map(card => {
                return (
                    <Card 
                        key={card.name} 
                        name={card.name} 
                        imgUrl={card.imgUrl}
                        onSelect={onSelect}
                    />
                )
            })}
        </ul>
    )                                   
}

export default Cards;