import { ReactElement } from "react"
import Card from "./Card"
import "../css/hand.css"

/**
 * Component for showing the cards - represents a card hand in a sense
 */

interface Props {
    children?: ReactElement<typeof Card> | ReactElement<typeof Card>[];
}

export default function Hand({
    children
} : Props) {
    return (
        <div className="hand">
            {
                children
            }
        </div>
    )
}