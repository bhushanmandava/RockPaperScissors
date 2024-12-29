import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // State for storing scores and result
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [result, setResult] = useState('');

  const choices = ["rock", "paper", "scissors"];
  const emojis = { rock: "✊", paper: "✋", scissors: "✌️" };

  const getComputerChoice = () => {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  };

  const determineWinner = (player, computer) => {
    if (player === computer) return "draw";
    if (
      (player === "rock" && computer === "scissors") ||
      (player === "paper" && computer === "rock") ||
      (player === "scissors" && computer === "paper")
    ) {
      return "player";
    }
    return "computer";
  };

  const playGame = (playerChoice) => {
    const computerChoice = getComputerChoice();
    const winner = determineWinner(playerChoice, computerChoice);

    if (winner === "player") {
      setPlayerScore(playerScore + 1);
      setResult(`You win! ${emojis[playerChoice]} beats ${emojis[computerChoice]}`);
    } else if (winner === "computer") {
      setComputerScore(computerScore + 1);
      setResult(`You lose! ${emojis[computerChoice]} beats ${emojis[playerChoice]}`);
    } else {
      setResult(`It's a draw! ${emojis[playerChoice]} equals ${emojis[computerChoice]}`);
    }
  };

  // Reset the game
  const resetGame = () => {
    setPlayerScore(0);
    setComputerScore(0);
    setResult('');
  };

  return (
    <div className="game-container">
      <h1>Rock-Paper-Scissors ✊✋✌️</h1>

      {/* Static scoreboard */}
      <div className="scoreboard">
        <div className="score">
          <p>Player</p>
          <h2>{playerScore}</h2>
        </div>
        <div className="score">
          <p>Computer</p>
          <h2>{computerScore}</h2>
        </div>
      </div>

      <div className="choices">
        <button onClick={() => playGame("rock")}>✊</button>
        <button onClick={() => playGame("paper")}>✋</button>
        <button onClick={() => playGame("scissors")}>✌️</button>
      </div>
      <div className="result">{result}</div>

      {/* Reset button */}
      <div className="reset-button">
        <button onClick={resetGame}>Reset Game</button>
      </div>
    </div>
  );
}

export default App
