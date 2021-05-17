const game = () => {
  let playerScore = 0,
    cpuScore = 0,
    throws = ['rock', 'paper', 'scissors'],
    counter = 1

  while (playerScore + cpuScore < 5) {
    console.log(`Round ${counter}`)
    const playerSelection = prompt()
    const computerSelection = computerPlay()
    console.log(playRound(playerSelection, computerSelection))
    counter += 1
  }

  console.log(`Player Score: ${playerScore} and CPU Score: ${cpuScore}`)

  function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
      playerScore += 1
      cpuScore += 1
      return `DRAW! Player: ${playerSelection} VS CPU: ${computerSelection}`
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
      playerScore += 1
      return `Player Wins! Player: ${playerSelection} VS CPU: ${computerSelection}`
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
      cpuScore += 1
      return `CPU Wins! Player: ${playerSelection} VS CPU: ${computerSelection}`
    } else if (
      throws.indexOf(playerSelection) > throws.indexOf(computerSelection)
    ) {
      playerScore += 1
      return `Player Wins! Player: ${playerSelection} VS CPU: ${computerSelection}`
    } else if (
      throws.indexOf(playerSelection) < throws.indexOf(computerSelection)
    ) {
      playerScore += 1
      return `CPU Wins! Player: ${playerSelection} VS CPU: ${computerSelection}`
    }
  }

  function computerPlay() {
    return throws[Math.floor(Math.random() * throws.length)]
  }
}

game(5)
