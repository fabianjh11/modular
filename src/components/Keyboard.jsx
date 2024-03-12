import React from "react";
import './Keyboard.css'

export function Keyboard () {
    return (
        <>
            <div className="keyboard">
                <div className = "key-row">
                    <div className="key" onClick={() => setLetter('Q') }>Q</div>
                    <div className="key" onClick={() => setLetter('W') }>W</div>
                    <div className="key" onClick={() => setLetter('E') }>E</div>
                    <div className="key" onClick={() => setLetter('R') }>R</div>
                    <div className="key" onClick={() => setLetter('T') }>T</div>
                    <div className="key" onClick={() => setLetter('Q') }>Y</div>
                    <div className="key" onClick={() => setLetter('U') }>U</div>
                    <div className="key" onClick={() => setLetter('I') }>I</div>
                    <div className="key" onClick={() => setLetter('O') }>O</div>
                    <div className="key" onClick={() => setLetter('P') }>P</div>
                </div>

                <div className="key-row">
                    <div className="key" onClick={() => setLetter('A') }>A</div>
                    <div className="key" onClick={() => setLetter('S') }>S</div>
                    <div className="key" onClick={() => setLetter('D') }>D</div>
                    <div className="key" onClick={() => setLetter('F') }>F</div>
                    <div className="key" onClick={() => setLetter('G') }>G</div>
                    <div className="key" onClick={() => setLetter('H') }>H</div>
                    <div className="key" onClick={() => setLetter('J') }>J</div>
                    <div className="key" onClick={() => setLetter('K') }>K</div>
                    <div className="key" onClick={() => setLetter('L') }>L</div>
                    <div className="key" onClick={() => setLetter('Ñ') }>Ñ</div>
                </div>
                
                <div className="key-row">
                    <div className="key" onClick={() => setLetter('Z') }>Z</div>
                    <div className="key" onClick={() => setLetter('X') }>X</div>
                    <div className="key" onClick={() => setLetter('C') }>C</div>
                    <div className="key" onClick={() => setLetter('V') }>V</div>
                    <div className="key" onClick={() => setLetter('B') }>B</div>
                    <div className="key" onClick={() => setLetter('N') }>N</div>
                    <div className="key" onClick={() => setLetter('M') }>M</div>
                    <div className="key" onClick={() => setLetter('') }>Backspace</div>
                </div>

            </div>
        </>
    )
}