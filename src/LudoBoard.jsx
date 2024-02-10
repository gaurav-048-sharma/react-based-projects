import { useState } from "react";
export default function LudoBoard() {
function Random() {
    return Math.floor(Math.random() * 999) + 1;
} 
// let [moves, setMoves] = useState({blue:0, yellow:0, red:0, green:0,}- Random());

let [moves, setMoves] = useState(Random);
function updBlue() {
    setMoves(Random());
    // setMoves((prevMoves) => {
    //     return {...prevMoves, blue: prevMoves.blue+1};

    // });
   
 }
 let [moves1, setMoves1] = useState(Random);
 function updYellow() {
    setMoves1(Random());
    // setMoves((prevMoves) => {
    //     return {...prevMoves, yellow: prevMoves.yellow+1};
    // });
   
 }
 let [moves2, setMoves2] = useState(Random);
 function updGreen() {
    setMoves2(Random());
    // setMoves((prevMoves) => {
    //     return {...prevMoves, green: prevMoves.green+1};
    // });
   
 }
 let [moves3, setMoves3] = useState(Random);
 function updRed() {
    setMoves3(Random());
    // setMoves((prevMoves) => {
    //     return {...prevMoves, red: prevMoves.red+1};
    // });
   
 }





    return (
        <div>
            <p>Ludo Game Begines!</p>
            <p></p>
            <div>
                <p >Blue Moves = {moves}</p>
                <button style={{backgroundColor: "blue"}} onClick={updBlue}>+1</button>
                <p>yellow Moves = {moves1}</p>
                <button style={{backgroundColor: "yellow", color: "black"}} onClick={updYellow}>+1</button>
                <p>green Moves = {moves2}</p>
                <button style={{backgroundColor: "green" , color: "black"}} onClick={updGreen}>+1</button>
                <p>Red Moves = {moves3}</p>
                <button style={{backgroundColor: "Red"}} onClick={updRed}>+1</button>
            </div>
        </div>
    )
}