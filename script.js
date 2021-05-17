const rock = document.querySelector('#rock')
const paper = document.querySelector('#paper')
const scissors = document.querySelector('#scissors')
const throws = ['rock', 'paper', 'scissors']
const emoji = {
  rock: '&#9994',
  paper: '&#128400',
  scissors: '&#9996',
}
let playerPick = document.querySelector('#playerPick')
let cpuPick = document.querySelector('#cpuPick')
let announce = document.querySelector('#announce')
let counter = document.querySelector('#counter')
let playerScore = document.querySelector('#playerscore')
let cpuScore = document.querySelector('#cpuscore')
let resetButton = document.querySelector('#reset')
let count = 1
let currPScore = 0
let currCPUScore = 0

init()

function init() {
  reset()
  setupButtons()
}

function reset() {
  count = 1
  counter.innerHTML = count
  currPScore = 0
  currCPUScore = 0
  playerPick.innerHTML = ''
  cpuPick.innerHTML = ''
  playerScore.innerHTML = currPScore
  cpuScore.innerHTML = currCPUScore
  announce.innerHTML = 'Game Start!'
}

function setupButtons() {
  resetButton.addEventListener('click', reset)
  for (let i of [rock, paper, scissors]) {
    i.addEventListener('click', function () {
      computerPlay()
      let cpuChoice = computerPlay()

      if (i.getAttribute('id') == cpuChoice) {
        update(i.getAttribute('id'), cpuChoice, 'draw')
        return
      } else if (i.getAttribute('id') == 'rock' && cpuChoice == 'scissors') {
        update(i.getAttribute('id'), cpuChoice, 'player')
        return
      } else if (i.getAttribute('id') == 'scissors' && cpuChoice == 'rock') {
        update(i.getAttribute('id'), cpuChoice, 'cpu')
        return
      } else if (
        throws.indexOf(i.getAttribute('id')) > throws.indexOf(cpuChoice)
      ) {
        update(i.getAttribute('id'), cpuChoice, 'player')
        return
      } else if (
        throws.indexOf(i.getAttribute('id')) < throws.indexOf(cpuChoice)
      ) {
        update(i.getAttribute('id'), cpuChoice, 'cpu')
        return
      }
      if (playerScore.innerHTML === 5 || cpuScore === 5) {
        endGame()
      }
    })
  }
}

function computerPlay() {
  return throws[Math.floor(Math.random() * throws.length)]
}

function update(player, cpu, result) {
  count += 1
  counter.innerHTML = count
  playerPick.innerHTML = emoji[player]
  cpuPick.innerHTML = emoji[cpu]
  if (result == 'player') {
    currPScore += 1
    playerScore.innerHTML = currPScore
    announce.innerHTML = 'Player Wins!'
    return
  } else if (result == 'cpu') {
    currCPUScore += 1
    cpuScore.innerHTML = currCPUScore
    announce.innerHTML = 'CPU Wins!'
    return
  } else {
    announce.innerHTML = 'DRAW!'
    return
  }
}
