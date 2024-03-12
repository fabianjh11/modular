import React from "react";
import { useState } from "react";
import './Row.css'
import { Square } from "./Square";

export function Row({ word, rowIndex }) {
    return(
        <>  
            {
                word.split('').map((letter, squareIndex) => (
                    <Square rowIndex={rowIndex} squareIndex={squareIndex} letter={letter}/>
                ))
            }
        </>
    )
}