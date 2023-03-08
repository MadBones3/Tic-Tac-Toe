import React, { useState } from "react"
import "./App.css"
import { Board } from "./components/Board"
import { ScoreBoard } from "./components/ScoreBoard"
import { ResetBtn } from "./components/ResetBtn"
import { Player } from "./components/Player"

function App() {
  const WIN_CONDITIONS = [
    // horz
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    // vert
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    // diag
    [0, 4, 8],
    [2, 4, 6]
  ]

  // STATE
  const [board, setBoard] = useState(Array(9).fill(null))
  const [xPlay, setXPlay] = useState(true)
  const [scores, setScores] = useState({ xScore: 0, oScore: 0 })
  const [gameOver, setGameOver] = useState(false)
  const [player1, setPlayer1] = useState("")
  const [player2, setPlayer2] = useState("")
  const [showOverlay, setShowOverlay] = useState(true)

  // Player 1 name
  const handlePlayer1Change = e => {
    setPlayer1(e.target.value)
  }
  // Player 2 name
  const handlePlayer2Change = e => {
    setPlayer2(e.target.value)
  }
  // Overlay condition
  const handleOverlay = () => {
    setShowOverlay(false)
  }
  // Player submit names
  const handleSubmit = event => {
    event.preventDefault()
    handleOverlay()
  }
  // logic for a box to be clicked
  const boxClicked = boxIdx => {
    // allow next player to play
    const updateBoard = board.map((value, index) => {
      if (index === boxIdx) {
        return xPlay === true ? "X" : "O"
      } else {
        return value
      }
    })
    // store the winner
    const win = winner(updateBoard)

    // Store the score
    if (win) {
      if (win === "O") {
        let { oScore } = scores
        oScore += 1
        setScores({ ...scores, oScore })
      } else {
        let { xScore } = scores
        xScore += 1
        setScores({ ...scores, xScore })
      }
    }

    setBoard(updateBoard)
    // set the next play to play
    setXPlay(!xPlay)
  }

  // find the winner
  const winner = board => {
    for (let i = 0; i < WIN_CONDITIONS.length; i++) {
      const [x, y, z] = WIN_CONDITIONS[i]

      if (board[x] && board[x] === board[y] && board[y] === board[z]) {
        setGameOver(true)
        return board[x]
      }
    }
  }

  // Reset the board when someone wins
  const resetBoard = () => {
    setGameOver(false)
    setBoard(Array(9).fill(null))
  }

  return (
    <>
      {showOverlay && (
        <div className="player-overlay">
          <Player
            player1={player1}
            player2={player2}
            handlePlayer1Change={handlePlayer1Change}
            handlePlayer2Change={handlePlayer2Change}
            handleSubmit={handleSubmit}
          />
        </div>
      )}
      <div className="App">
        <div className="game">
          <div className="details">
            <ScoreBoard scores={scores} xPlay={xPlay} player1={player1} player2={player2} />
            <ResetBtn resetBoard={resetBoard} />
          </div>
          <Board board={board} onClick={gameOver ? resetBoard : boxClicked} />
        </div>
      </div>
    </>
  )
}

export default App
