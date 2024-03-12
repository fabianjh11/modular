/*const words = ['BEISBOL','RECIBIR', 'DELGADO', 'ICÓNICO', 'APLICAR','PERFUME',
    'VALIOSO', 'CERCANO','IMPACTO','CONDENA','ARMONÍA']
*/
const words = ['BEISBOL', 'RECIBIR']

const mainWord = 'SIGNIFICADO'

const normalizedWords = words.map(x => x.normalize("NFD").replace(/[\u0300-\u036f]/g, ""))

let squares = new Array(normalizedWords.length)

for(let i = 0; i < squares.length; i++) {
    squares[i] = new Array(normalizedWords[i].length)
}

for(let i = 0; i < squares.length; i++) {
    for(let j = 0; j < squares[i].length; j++) {
        squares[i][j] = 'e'
    }
}

export {normalizedWords, mainWord, squares}