import React from 'react'

const Wrong = ({ answer, reset }) => {
	return (
		<div className="component component-wrong game-state game-wrong full-height">
			<div>
				<h1>Woops!</h1>
				<p>The correct answer was: { answer }</p>
				<br />
				<button className="primary" onClick={() => reset()}>new game</button>
			</div>
		</div>
	)
}

export default Wrong