import "../css/card.css"

/**
 * Component represents a card. It primarily just displays that card and contains animation functionality
 */

interface Props {
    cardData : {
        url : string
        name : string
        rarity : string
    }
    onImageLoad : () => void
}
export default function Card({ cardData, onImageLoad} : Props) {
    
    return (
        <div className="card">
            <p className={`rarity-label ${cardData.rarity}`}>{cardData.rarity}</p>
            <img src={`http://localhost:5000/${cardData.url}`} width="100px" alt={cardData.name} onLoad={onImageLoad}/>
        </div>
    )
}