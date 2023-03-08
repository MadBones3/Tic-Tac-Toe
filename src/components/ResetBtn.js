import React from "react"
import "./ResetBtn.css"

export const ResetBtn = ({ resetBoard }) => {
  return (
    <button className="reset-btn" onClick={resetBoard}>
      Reset
    </button>
  )
}
