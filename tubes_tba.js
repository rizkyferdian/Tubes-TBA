// Proses Inisialisai
const alpha = Array.from(Array(26)).map((e, i) => i + 65);
const alphabetList = alpha.map((x) => String.fromCharCode(x).toLowerCase());
const stateList = ['q0', 'q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7', 'q8', 'q9', 'q10', 'q11', 'q12', 'q13', 'q14', 'q15', 'q16', 'q17', 'q18', 'q19', 'q20', 'q21', 'q22', 'q23', 'q24', 'q25', 'q26', 'q27', 'q28', 'q29', 'q30', 'q31', 'q32', 'q33', 'q34', 'q35', 'q36', 'q37', 'q38', 'q39', 'q40',
    'q41', 'q42', 'q43', 'q44', 'q45', 'q46', 'q47', 'q48']

let transitionTable = {}

stateList.forEach(state => {
    alphabetList.forEach(alphabet => {
        transitionTable[[state, alphabet]] = 'ERROR'
    });
    transitionTable[[state, '#']] = 'ERROR'
    transitionTable[[state, ' ']] = 'ERROR'
});

// Start
transitionTable[['q0', ' ']] = 'q0'
transitionTable[['q26', ' ']] = 'q48'
transitionTable[['q26', '#']] = 'ACCEPT'
transitionTable[['q48', ' ']] = 'q48'
transitionTable[['q48', '#']] = 'ACCEPT'

//Bahasa Spanyol
// Nosotros
transitionTable[['q0', 'n']] = 'q1'
transitionTable[['q1', 'o']] = 'q2'
transitionTable[['q2', 's']] = 'q3'
transitionTable[['q3', 'o']] = 'q4'
transitionTable[['q4', 't']] = 'q5'
transitionTable[['q5', 'r']] = 'q8'
transitionTable[['q8', 'o']] = 'q9'
transitionTable[['q9', 's']] = 'q26'
transitionTable[['q48', 'n']] = 'q1'

// Ellos
transitionTable[['q0', 'e']] = 'q6'
transitionTable[['q6', 'l']] = 'q7'
transitionTable[['q7', 'l']] = 'q8'
transitionTable[['q48', 'e']] = 'q6'

// Planta
transitionTable[['q0', 'p']] = 'q10'
transitionTable[['q10', 'l']] = 'q11'
transitionTable[['q11', 'a']] = 'q12'
transitionTable[['q12', 'n']] = 'q13'
transitionTable[['q13', 't']] = 'q14'
transitionTable[['q14', 'a']] = 'q26'
transitionTable[['q48', 'p']] = 'q10'

// Padre
transitionTable[['q10', 'a']] = 'q16'
transitionTable[['q16', 'd']] = 'q17'
transitionTable[['q17', 'r']] = 'q18'
transitionTable[['q18', 'e']] = 'q26'

// Madre
transitionTable[['q0', 'm']] = 'q15'
transitionTable[['q15', 'a']] = 'q16'
transitionTable[['q48', 'm']] = 'q15'

// vestir
transitionTable[['q0', 'v']] = 'q19'
transitionTable[['q19', 'e']] = 'q20'
transitionTable[['q20', 's']] = 'q21'
transitionTable[['q21', 't']] = 'q22'
transitionTable[['q22', 'i']] = 'q25'
transitionTable[['q25', 'r']] = 'q26'
transitionTable[['q48', 'v']] = 'q19'

// flor
transitionTable[['q0', 'f']] = 'q23'
transitionTable[['q23', 'l']] = 'q24'
transitionTable[['q24', 'o']] = 'q25'
transitionTable[['q48', 'f']] = 'q23'

// comer
transitionTable[['q0', 'c']] = 'q27'
transitionTable[['q27', 'o']] = 'q28'
transitionTable[['q28', 'm']] = 'q29'
transitionTable[['q29', 'e']] = 'q25'
transitionTable[['q48', 'c']] = 'q27'

// Comprar
transitionTable[['q29', 'p']] = 'q30'
transitionTable[['q30', 'r']] = 'q31'
transitionTable[['q31', 'a']] = 'q25'


// usar
transitionTable[['q0', 'u']] = 'q32'
transitionTable[['q32', 's']] = 'q31'
transitionTable[['q48', 'u']] = 'q32'

// Buscar
transitionTable[['q0', 'b']] = 'q33'
transitionTable[['q33', 'u']] = 'q34'
transitionTable[['q34', 's']] = 'q35'
transitionTable[['q35', 'c']] = 'q31'
transitionTable[['q48', 'b']] = 'q33'

// yo
transitionTable[['q0', 'y']] = 'q36'
transitionTable[['q36', 'o']] = 'q26'
transitionTable[['q48', 'y']] = 'q36'

// libro
transitionTable[['q0', 'l']] = 'q37'
transitionTable[['q37', 'i']] = 'q38'
transitionTable[['q38', 'b']] = 'q39'
transitionTable[['q39', 'r']] = 'q36'
transitionTable[['q48', 'l']] = 'q37'

// zapato
transitionTable[['q0', 'z']] = 'q40'
transitionTable[['q40', 'a']] = 'q41'
transitionTable[['q41', 'p']] = 'q42'
transitionTable[['q42', 'a']] = 'q43'
transitionTable[['q43', 't']] = 'q36'
transitionTable[['q48', 'z']] = 'q40'

// arroz
transitionTable[['q0', 'a']] = 'q44'
transitionTable[['q44', 'r']] = 'q45'
transitionTable[['q45', 'r']] = 'q46'
transitionTable[['q46', 'o']] = 'q47'
transitionTable[['q47', 'z']] = 'q26'
transitionTable[['q48', 'a']] = 'q44'

//////////////// LEXICAL ANALYSIS ////////////////
const checkSentence = (sentence) => {
    let resultLa = document.getElementById('resultLa')
    let laTitle = document.getElementById('laTitle')
    let parserTitle = document.getElementById('parserTitle')
    let resultParser = document.getElementById('resultParser')
    laTitle.className = 'block font-medium text-lg'
    parserTitle.className = 'hidden'
    resultLa.innerText = ''
    resultParser.innerText = ''

    let inputString = sentence.toLowerCase() + '#'
    let idxChar = 0
    let state = 'q0'
    let currentToken = ''
    let currentChar = ''
    while (state != 'ACCEPT') {
        currentChar = inputString[idxChar]
        if (currentChar != ' ' && currentChar != '#' && !alphabetList.includes(currentChar)) {
            console.log('error');
            resultLa.innerText += 'ERROR'
            resultLa.style.color = 'red'
            break
        }

        currentToken += currentChar
        state = transitionTable[[state, currentChar]]
        if (state == 'q26') {
            resultLa.innerText = resultLa.innerText + 'Current Token : ' + currentToken + ', valid'
            resultLa.innerText += '\n'
            currentToken = ''
        }
        if (state == 'ERROR') {
            resultLa.innerText += 'ERROR'
            resultLa.style.color = 'red'
            break
        }
        idxChar++
    }

    if (state == 'ACCEPT') {
        resultLa.innerText += 'Semua token pada input : ' + sentence + ', valid'
        resultLa.style.color = 'green'

        //////////////// PARSER ////////////////
        parserTitle.className = 'block font-medium text-lg'
        sentence = sentence.replace(/\s+/g, ' ').trim()
        let tokens = sentence.toLowerCase().split(" ")
        tokens.push('EOS')

        // Symbol Definition
        let nonTerminals = ['SB', 'NN', 'VB']
        let terminals = ['yo', 'madre', 'padre', 'ellos', 'nosotros', 'flor', 'arroz', 'zapato', 'vestir', 'libro', 'planta', 'comer', 'comprar', 'buscar', 'usar']

        // Parse Table Definition
        let parseTable = {}

        parseTable[['SB', 'yo']] = ['NN', 'VB', 'NN']
        parseTable[['SB', 'madre']] = ['NN', 'VB', 'NN']
        parseTable[['SB', 'padre']] = ['NN', 'VB', 'NN']
        parseTable[['SB', 'ellos']] = ['NN', 'VB', 'NN']
        parseTable[['SB', 'nosotros']] = ['NN', 'VB', 'NN']
        parseTable[['SB', 'flor']] = ['NN', 'VB', 'NN']
        parseTable[['SB', 'arroz']] = ['NN', 'VB', 'NN']
        parseTable[['SB', 'zapato']] = ['NN', 'VB', 'NN']
        parseTable[['SB', 'vestir']] = ['NN', 'VB', 'NN']
        parseTable[['SB', 'libro']] = ['NN', 'VB', 'NN']
        parseTable[['SB', 'planta']] = ['error']
        parseTable[['SB', 'comer']] = ['error']
        parseTable[['SB', 'comprar']] = ['error']
        parseTable[['SB', 'buscar']] = ['error']
        parseTable[['SB', 'usar']] = ['error']
        parseTable[['SB', 'EOS']] = ['error']

        parseTable[['NN', 'yo']] = ['yo']
        parseTable[['NN', 'madre']] = ['madre']
        parseTable[['NN', 'padre']] = ['padre']
        parseTable[['NN', 'ellos']] = ['ellos']
        parseTable[['NN', 'nosotros']] = ['nosotros']
        parseTable[['NN', 'kerongsang']] = ['kerongsang']
        parseTable[['NN', 'flor']] = ['flor']
        parseTable[['NN', 'arroz']] = ['arroz']
        parseTable[['NN', 'zapato']] = ['zapato']
        parseTable[['NN', 'vestir']] = ['vestir']
        parseTable[['NN', 'libro']] = ['libro']
        parseTable[['NN', 'planta']] = ['error']
        parseTable[['NN', 'comer']] = ['error']
        parseTable[['NN', 'comprar']] = ['error']
        parseTable[['NN', 'buscar']] = ['error']
        parseTable[['NN', 'usar']] = ['error']
        parseTable[['NN', 'EOS']] = ['error']


        parseTable[['VB', 'planta']] = ['planta']
        parseTable[['VB', 'comer']] = ['comer']
        parseTable[['VB', 'comprar']] = ['comprar']
        parseTable[['VB', 'buscar']] = ['buscar']
        parseTable[['VB', 'usar']] = ['usar']
        parseTable[['VB', 'yo']] = ['error']
        parseTable[['VB', 'madre']] = ['error']
        parseTable[['VB', 'padre']] = ['error']
        parseTable[['VB', 'ellos']] = ['ellos']
        parseTable[['VB', 'nosotros']] = ['error']
        parseTable[['VB', 'flor']] = ['error']
        parseTable[['VB', 'arroz']] = ['error']
        parseTable[['VB', 'zapato']] = ['error']
        parseTable[['VB', 'vestir']] = ['error']
        parseTable[['VB', 'libro']] = ['error']
        parseTable[['VB', 'EOS']] = ['error']

        // Stack Initialization
        let stack = []
        stack.push('#')
        stack.push('SB')

        // Input reading initialization
        let idxToken = 0
        let symbol = tokens[idxToken]

        // Parsing Proses
        while (stack.length > 0) {
            let top = stack[stack.length - 1]
            resultParser.innerText = resultParser.innerText + 'Top = ' + top + '\n'
            resultParser.innerText = resultParser.innerText + 'Symbol = ' + symbol + '\n'
            if (terminals.includes(top)) {
                resultParser.innerText = resultParser.innerText + top + ' adalah simbol terminal \n'
                if (top == symbol) {
                    stack.pop()
                    idxToken++
                    symbol = tokens[idxToken]
                    if (symbol == 'EOS') {
                        resultParser.innerText = resultParser.innerText + 'Isi stack = ' + '[' + stack + ']' + '\n \n'
                        stack.pop()
                    }
                } else {
                    resultParser.innerText = resultParser.innerText + 'error \n \n'
                    break
                }
            } else if (nonTerminals.includes(top)) {
                resultParser.innerText = resultParser.innerText + top + ' adalah simbol non-terminal \n'
                if (parseTable[[top, symbol]][0] != 'error') {
                    stack.pop()
                    let symbolToBePushed = parseTable[[top, symbol]]
                    for (let i = symbolToBePushed.length - 1; i > -1; i--) {
                        stack.push(symbolToBePushed[i])
                    }
                } else {
                    resultParser.innerText = resultParser.innerText + 'error \n \n'
                    break
                }
            } else {
                resultParser.innerText = resultParser.innerText + 'error \n \n'
                break
            }
            resultParser.innerText = resultParser.innerText + 'Isi stack = ' + '[' + stack + ']' + '\n \n'
        }

        // Conclusion
        if (symbol == 'EOS' && stack.length == 0) {
            resultParser.innerText = resultParser.innerText + 'Input string "' + sentence + '" diterima, sesuai Grammar \n'
            resultParser.style.color = 'green'
        } else {
            resultParser.innerText = resultParser.innerText + 'Error, input string "' + sentence + '" tidak diterima, tidak sesuai Grammar \n'
            resultParser.style.color = 'red'
        }
    }
}

let form = document.getElementById('form')

const handleSubmit = (e) => {
    let sentence = document.getElementById('sentence').value
    checkSentence(sentence)
    e.preventDefault()
}

form.addEventListener('submit', (e) => handleSubmit(e))