import Hand from "../components/Hand"
import { useState } from "react"
import Card from "../components/Card"
import { useEffect } from "react"
import "../css/drawCards.css"

interface drawnCard {
    name : string
    rarity : string
    url : string
}

interface cardResponse {
    drawn_cards : Array<drawnCard>
}

/**
 * Page for drawing random cards
 */
export default function DrawCards() {
    const [cards, setCards] = useState<Array<drawnCard>>([])
    const [cardsLoaded, setCardsLoaded] = useState<number>(0)

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        
        //Reset state
        setCards([])
        setCardsLoaded(0)

        const drawInput = event.currentTarget.elements.namedItem("draw-input") as HTMLInputElement;
        const drawNum = drawInput.value;
        fetch(`http://localhost:5000/api/get_random_cards?draws=${drawNum}`, {
            method: "GET"
        }).then((response) => {
            if (response.ok) {
                return response.json()
            } 
            else {
                //
            }
        }).then((json : cardResponse) => {
            const cardArr: Array<drawnCard> = json.drawn_cards;
            setCards(cardArr);
        })
    }

    function handleImageLoad() {
        setCardsLoaded(
            cardsLoaded + 1
        )
    }

    useEffect(() => {
        console.log(cardsLoaded)
        if (cardsLoaded == cards.length) {
            for (let index = 0; index < cards.length; index++) {
                const cardElement = document.querySelector(`.card:nth-child(${index + 1})`);
                cardElement?.classList.add('reveal-card'); // Add reveal class to each card
            }
        }
    }, [cardsLoaded])


    return (
        <div>
            <form onSubmit={handleSubmit} className="draw-cards-form">
                <input id="draw-input" type="number" placeholder="Enter amount to draw (Max 10)"></input>
                <button type="submit">Draw cards</button>
            </form>
            <Hand>
                {
                    cards?.map((card : drawnCard) => {
                        return <Card cardData={card} key={card.name} onImageLoad={handleImageLoad}></Card>
                    })
                }
            </Hand>
        </div>
    )
}