// Use "input()" to input a line from the user
// Use "input(str)" to print some text before requesting input
// You will need this in the following stages
const input = require('sync-input')

console.log(`H A N G M A N`)

const answer = ['python', 'java', 'swift', 'javascript']


function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

let index = getRndInteger(0, answer.length - 1)

let randomAnswer = answer[index]

let hint = randomAnswer.split('')

let randomHint = hint.splice(0, hint.length)


for (let i = 0; i < randomHint.length; i++) {
    hint.push('-')
}

hint = hint.join('')

let attempts = 0

let letters = []

let losses = 0

let victories = 0

let action = input('Type "play" to play the game, "results" to show the scoreboard, and "exit" to quit: ')

while (action !== 'exit') {

    if (action === 'play') {
        while (attempts < 8 && hint.includes('-')) {

            console.log(hint);

            let letter = input('Input a letter: ')


            while (letter.length !== 1 || /[A-Z]/.test(letter) === true || /^[A-Za-z]+$/.test(letter) === false) {
                if (letter.length !== 1 && /^[A-Za-z]+$/.test(letter) === true) {
                    console.log('Please, input a single letter.')
                    letter = input('Input a letter: ')
                } else {
                    console.log('Please, enter a lowercase letter from the English alphabet.')
                    letter = input('Input a letter: ')
                }
            }

            hint = hint.split('')

            if (randomAnswer.includes(letter) && !letters.includes(letter)) {
                let word = randomAnswer.split('')

                let index1 = word.indexOf(letter)

                let index2 = word.lastIndexOf(letter)

                hint[index1] = letter

                hint[index2] = letter

            } else if (letters.includes(letter)) {
                console.log('You\'ve already guessed this letter.')
            } else {
                console.log('That letter doesn\'t appear in the word.')

                attempts += 1
            }

            hint = hint.join('')

            letters.push(letter)

        }

        if (hint.includes('-')) {
            console.log('You lost!')
            losses += 1
        } else {
            console.log(`You guessed the word ${randomAnswer}!
You survived!`)
            victories += 1
        }
    } else if (action === 'results') {
        console.log(`You won ${victories} times.
You lost ${losses} times.`)
    }
    action = input('Type "play" to play the game, "results" to show the scoreboard, and "exit" to quit: ')
}






