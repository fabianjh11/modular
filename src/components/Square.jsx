import React from "react";
import { useState } from "react";
import './Square.css'
import { squares } from "../words.js";


export function Square({ rowIndex, squareIndex, letter }) {
    const [content, setContent] = useState("") 
    const [selected, setSelected] = useState(false)
    const [correct, setCorrect] = useState(false)
    let clase = 'letter'
    
    function handleClick() {
        squares[rowIndex, squareIndex] = 's'
    }
    return (
        <>
            <div className='letter'  onClick={ handleClick }>{ squares[rowIndex, squareIndex] }</div>
        </>
    )
    
}