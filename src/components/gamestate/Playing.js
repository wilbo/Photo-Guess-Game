import React from 'react'
import Answers from '../Answers'
import Erases from '../Erases'

const Playing = ({ game, checkAnswer }) => {
	return (
		<div className="component component-playing full-height">
			<Erases { ...game } />
			<Answers { ...game } checkAnswer={checkAnswer} />
		</div>
	)
}

export default Playing 