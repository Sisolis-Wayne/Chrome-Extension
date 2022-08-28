let boxEl = document.querySelector('#box')
boxEl.textContent = 'Open the box!'

boxEl.addEventListener('click', function() {
    console.log('You just opened the box!')
})

let buyBtn = document.querySelector('#container')
// buyBtn.textContent = 'I would like to buy a new phone'
buyBtn.innerHTML = '<button>' + 'Buy!' + '</button>'
buyBtn.addEventListener('click', function () {
    console.log('Done!')
    buyBtn.innerHTML += '<p>Thank you for buying!</p>'
})


const recipient = 'Akorede'
const sender = 'Michael'

const email = `Hey ${recipient}! 
How is it going?
Cheers ${sender}`

console.log(email)

// localStorage.setItem('myLeads', 'wwww.mne.com')
// console.log(localStorage.getItem('myLeads'))
// localStorage.clear()
// console.log(localStorage.getItem('myLeads'))
// console.log(localStorage.getItem('myLeads'))

//  IF YOU ARE CONVERTING FROM STRING TO ARRAY ALWAYS USE ""
let myLeads = `["wwww.awesomelead.com"]`
myLeads = JSON.parse(myLeads)
myLeads.push("wwww.merv.com")
console.log(myLeads)
console.log(typeof myLeads)

myLeads = JSON.stringify(myLeads)
console.log(myLeads)
console.log(typeof myLeads)

// FUNCTION PARAMETERS
function add(num1, num2) {
    return num1 + num2
}
console.log(add(3, 4))
console.log(add(9, 102))

// PASSING IN AN ARRAY AS AN ARGUMENT
let noun = ['Ade', 'Bisi', 'Faith', 'Precious', 'Korede']
function getFirst(arr) {
    return arr[0]
}
console.log(noun)
console.log(getFirst(noun))


// ---------------------------
const player = 'Korede'
const opponent = 'Nathan'
const game = 'Amazing Fighter'
let points = 0
let hasWon = false

// PLAYING THE GAME
points += 100
hasWon = true

// ANNOUNCING THE WINNER
if (hasWon) {
    console.log(`${player} got ${points} points and won the ${game} game!`)
} else {
    console.log(`The winner is ${opponent}! ${player} lost the game.`)
}

// ---------------------------------
let myCourses = ['learn CSS Animations', 'UI Design Fundamentals', 'Intro to Clean Code']

// function singleParameter(ayra) {
//     return ayra
// }

function singPara(ayra) {
    for (let i = 0; i < ayra.length; i++) {
        console.log(ayra[i])
    }
}

// console.log(singleParameter(myCourses))
singPara(myCourses)

// ---------------
let epl = localStorage.getItem('club')
console.log(epl)

// -----------------------
let janeScore = document.querySelector('#but-btn')
janeScore.textContent = "LOG JANE'S SCORE!"

let data = [
    {
        player: 'Jane',
        score: 52
    },
    {
        player: 'Mark',
        score: 41
    }
]

janeScore.addEventListener('click', function () {
    let scores = data[0].score
    console.log(scores)
})

janeScore.addEventListener('dblclick', function () {
    let scores = data[1].score
    console.log(scores)
})



function generateSentence(desc, arr) {
    let answer = `The ${arr.length} ${desc} are `
    const lastIndex = arr.length - 1

    for (let i = 0; i < arr.length; i++) {
        if (i === lastIndex) {
            answer += arr[i] + '.'
        } else {
            answer += arr[i] + ', '
        }
        // console.log(answer)
    }
    
    return answer
    // let result = `The 3 ${desc} are ${arr}`
}

let larCount = 'largest countries' 
let countries = ['China', 'India', 'USA']
console.log(generateSentence(larCount, countries))

// console.log(countries.length)

let fruits = 'best fruits'
let theFruits = ['Apples', 'Bananas']
console.log(generateSentence(fruits, theFruits))

