//   =======Selections=======

const p1ScoreElm = document.querySelector('#p1Score');
const p2ScoreElm = document.querySelector('#p2Score');
const playingToElm = document.querySelector('.playingTo');
const inputscoreElm = document.querySelector('#inputScore');
const p1BtnElm = document.querySelector('#p1Btn');
const p2BtnElm = document.querySelector('#p2Btn');
const resetBtnElm = document.querySelector('#resetBtn');
const formElm = document.querySelector('form');

let p1Score = 0;
let p2Score = 0;
let winningScore = 5;
let gameOver = false;
let truePlyer = 'p1'

// update winning score / playingToScore into DOM
playingToElm.textContent = winningScore

// disable playrtBtn base on turn
truePlyer === 'p1' 
? p2BtnElm.setAttribute('disabled', 'disabled')
: p1BtnElm.setAttribute('disabled', 'disabled')


// ==singel responsibility principal==
function validarionInput(score){
    if(score < 1){
     alert('Please provide a value more then 0')
    }
}

// ===============staring code===============
// ==input and updateing playing to score==
formElm.addEventListener('submit', (evt) => {
    //== preventDefault() method er kaj hosche bowrser jate relode na ney==
  evt.preventDefault()

//  == getting the input== 
// console.log(inputscoreElm.value)
const inputScore = inputscoreElm.value;
// ==validation check==
validarionInput(inputScore)
// saving it into data layer
winningScore = +inputScore


// ==showing the value==
playingToElm.textContent = inputScore;
// ==reset value==
 inputscoreElm.value = ''
})

 // p1btn
p1BtnElm.addEventListener('click', (evt) => {
    // increase the count
    // increase conditionally
    if(truePlyer === 'p1' && !gameOver && p1Score < winningScore){
        p1Score++
         // update DOM
     p1ScoreElm.textContent = p1Score
    //  change player turn 
    truePlyer = 'p2'
    // disable p1 Button
    p1BtnElm.setAttribute('disabled', 'disabled');
    p2BtnElm.removeAttribute('disabled');
    }
    if (p1Score === winningScore){
        gameOver =true
        // disabled player 1 or player 2 btn
        p1BtnElm.setAttribute('disabled', 'disabled');
        // enable p2 button
        p2BtnElm.setAttribute('disabled', 'disabled');
        // show massege
        alert ('Player 1 is winner')
    }
  
   
})

 // p2btn
p2BtnElm.addEventListener('click', (evt) => {
    // increase the count
    // increasethe count based on conditionally 
    if(truePlyer === 'p2' && !gameOver && p2Score < winningScore){
        p2Score++
          // update DOM
    p2ScoreElm.textContent = p2Score
    // change player turn
    truePlyer = 'p1'
    // disable p2 Button
    p2BtnElm.setAttribute('disabled', 'disabled');
    // enable p2 button
    p1BtnElm.removeAttribute('disabled');
    }
    if (p2Score === winningScore){
        gameOver = true
          // disabled player 1 or player 2 btn
          p1BtnElm.setAttribute('disabled', 'disabled');
          p2BtnElm.setAttribute('disabled', 'disabled');
          // show massege
          alert ('Player 2 is winner')
    }
  
  
})


resetBtnElm.addEventListener('click', (evt) => {
    p1Score = 0
    p2Score = 0
    winningScore = 5
    gameOver = false
    truePlyer = 'p2'
    p1BtnElm.removeAttribute('disabled')
    p2BtnElm.removeAttribute('disabled')
    p1ScoreElm.textContent = p1Score
    p2ScoreElm.textContent = p2Score
    playingToElm.textContent = winningScore
})

