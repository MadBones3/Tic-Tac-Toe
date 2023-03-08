import React from "react"
import "./Player.css"

export const Player = ({
  player1,
  player2,
  handlePlayer1Change,
  handlePlayer2Change,
  handleSubmit
}) => {
  return (
    <div className="center">
      <form className="player-form" onSubmit={handleSubmit}>
        <label>
          Player 1:
          <input type="text" value={player1} onChange={handlePlayer1Change} required />
        </label>
        <br />
        <label>
          Player 2:
          <input type="text" value={player2} onChange={handlePlayer2Change} required />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
