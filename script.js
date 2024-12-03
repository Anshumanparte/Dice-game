'use strict';


//selecting elements 
const player0El = document.querySelector('.player--0')
const player1El = document.querySelector('.player--1')
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new')
const btnRoll = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold')

//starting condition
score0El.textContent =0;
score1El.textContent =0;
diceEl.classList.add('hidden');

const score =[0,0];
let playing =true;
let currscore = 0;
let activePlayer =0;

const switchPlayer = ()=>{
        document.getElementById(`current--${activePlayer}`).textContent = 0;
        currscore=0;
        activePlayer = activePlayer === 0 ? 1 : 0;
        player0El.classList.toggle('player--active')
        player1El.classList.toggle('player--active')
}

//rolling dice
btnRoll.addEventListener('click',()=>{
if(playing){
    //1. generate random dice
    const dice = (Math.trunc(Math.random()*6))+1;
    
    
    //2.displaydice
    diceEl.setAttribute('src',`dice-${dice}.png`)
    diceEl.classList.remove('hidden');

    //3.check if roll 1 switch next player
    if(dice !== 1){
        currscore += dice;
        document.getElementById(`current--${activePlayer}`).textContent = currscore;
        
    }else{
        switchPlayer();
    }
}
})


btnHold.addEventListener('click',()=>{
if(playing){
    //1. add currscore to active player
    score[activePlayer] += currscore;
    document.getElementById(`score--${activePlayer}`).textContent = score[activePlayer];
    //.2check score is >=100
    if(score[activePlayer]>=100){
        playing=false;
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        
    }else{
        switchPlayer();
    }
}
})

//reset

btnNew.addEventListener('click',()=>{
    currscore=0;
    playing=true;
    
    diceEl.classList.add('hidden');
    for (let i = 0; i < score.length; i++) {
        score[i] = 0;
        document.querySelectorAll('.score')[i].textContent =0;
        document.querySelectorAll('.current-score')[i].textContent=0;
        document.querySelector(`.player--${i}`).classList.remove('player--winner');
        document.querySelector(`.player--${i}`).classList.remove('player--active');

    }
   player0El.classList.add('player--active');
    
})











