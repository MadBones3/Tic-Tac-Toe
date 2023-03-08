import React from "react"
import "./ScoreBoard.css"

export const ScoreBoard = ({ scores, xPlay, player1, player2 }) => {
  const { xScore, oScore } = scores
  return (
    <div className="scoreBoard">
      <span className={`score x-score ${!xPlay && "inactive"}`}>
        {player1} - {xScore}
      </span>
      <span className={`score o-score ${xPlay && "inactive"}`}>
        {player2} - {oScore}
      </span>
    </div>
  )
}
