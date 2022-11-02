import Card from "./Card";

const Cards = ({ cards, onSelect }) => {
    return (
        <ul className="flex flex-wrap items-center">
            {cards.map(card => {
                return (
                    <Card 
                        key={card.id} 
                        name={card.label} 
                        imgUrl={card.image}
                        onSelect={onSelect}
                    />
                )
            })}
        </ul>
    )                                   
}

export default Cards;