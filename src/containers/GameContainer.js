import React, { Component } from 'react'

import constants from '../utils/constants'
import GuessGame from '../utils/GuessGame'
import categories from '../utils/categories'

import Loader from '../components/Loader'
import Attribution from '../components/Attribution'
import Canvas from '../components/Canvas'
import Playing from '../components/gamestate/Playing'
import Right from '../components/gamestate/Right'
import Wrong from '../components/gamestate/Wrong'

import './GameContainer.css'

class GameContainer extends Component {
	state = {
		game: new GuessGame(categories),
		data: null
	}

	componentDidMount() {
		this.fetchImage()
	}

	fetchImage = () => {
		fetch(constants.API_URL + 'photos/random?orientation=portrait&query=' + this.state.game.answer, constants.FETCH_HEADER)
		// fetch('http://localhost:3000/cat.json', constants.FETCH_HEADER)
			.then(response => response.json())
			.then(parsed => this.setState({
				data: parsed
			}))
	}
	
	checkAnswer = (answer) => {
		const { game } = this.state
		const state = answer === game.answer ? 1 : 2
		this.setState({ game: { ...game, state } })
		this.canvas.clear()
	}

	reset = () => this.setState({
		game: new GuessGame(categories),
		data: null
	}, () => this.fetchImage())

	incrementErases = () => this.setState(prevState => ({ 
		game: { 
			...prevState.game, 
			erases: ++prevState.game.erases
		}
	}))

	GameStateComponent = () => {
		const { game } = this.state

		switch (game.state) {
			case 0:
				return <Playing game={game} checkAnswer={this.checkAnswer} />				
			case 1:
				return <Right { ...game } reset={this.reset} />				
			case 2:
				return <Wrong { ...game } reset={this.reset} />				
			default:
				return <p>invalid game state</p>
		}
	}

  render() {
		const { data } = this.state
		
    return (
			<div className="container container-game">
				{this.state.data ? (
					<div className="game-image full-height" style={{ backgroundImage: 'url(' + data.urls.regular + ')' }}>
						{ this.state.game.erases === 0 ? <div className="game-info full-height"><p>Click/Tap to reveal the the underlaying image</p></div> : '' }
						<Canvas incrementErases={this.incrementErases} ref={ref => this.canvas = ref} />
						<Attribution { ...data.user } />
						{ this.GameStateComponent() }
					</div>
				) : <Loader />}
			</div>			
    )
  }
}

export default GameContainer
