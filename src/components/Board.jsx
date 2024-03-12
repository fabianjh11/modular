import React from "react";
import './Board.css'
import { normalizedWords, mainWord } from '../words.js'
import { Row } from './Row.jsx'

export function Board() {
    return (
        <>
            <div className="board">
                {
                    normalizedWords.map((word, rowIndex) => (
                        <div className="row" key={rowIndex}>
                            <Row key={rowIndex} word={word} rowIndex={rowIndex}/>
                        </div>
                    ))
                }
            </div>
        </>
    );
}