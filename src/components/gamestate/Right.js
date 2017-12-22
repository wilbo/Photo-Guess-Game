import React from 'react'

const Right = ({ erases, reset }) => {
	return (
		<div className="component component-right game-state game-right full-height">
			<div>
				<h1>Correct!</h1>
				<p>You guessed the correct answer with a total of { erases } erases.</p>
				<button className="primary" onClick={() => reset()}>new game</button>
			</div>
		</div>
	)
}

export default Right 