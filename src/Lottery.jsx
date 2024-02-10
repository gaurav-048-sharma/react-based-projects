import { useState } from "react";
import "./Lottery.css";
import { generateTicket, sum } from "./Helper";

export default function Lottery() {
    let [ticket, setTicket] = useState(generateTicket(3));
    let isWinning = sum(ticket) === 15;
    let buyTicket = () => {
        setTicket(generateTicket(3));
    }
    return (

        <div>
            <h1>Lottery Game Begins!</h1>
            <div className="ticket">
                <span>{ticket[0]}</span>
                 <span>{ticket[1]}</span>
                <span>{ticket[2]}</span>
            </div>
            <button onClick={buyTicket}> Buy a Ticket</button>
            <h3>{isWinning && "congratualation ,you won"}</h3>
        </div>
    )
}