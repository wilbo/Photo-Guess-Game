import React, { Component } from 'react'

class Canvas extends Component {
	componentDidMount() {
		this.ctx = this.canvas.getContext('2d')
		window.addEventListener('resize', this.init)
		this.init()
	}

	init = () => {
		this.canvas.width  = window.innerWidth
		this.canvas.height = window.innerHeight

		// Size of eraser
		this.eraseRadius = (window.innerWidth / 4) / 2
		this.fill()
	}

	// Setup the canvas all white
	fill = () => {
		this.ctx.fillStyle="#FBFBFB"
		this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height)
	}

	// Clear the canvas completely
	clear = () => {
		this.ctx.globalCompositeOperation = 'destination-out'
		this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height)
		this.ctx.fill()
	}

	// Erase a portion of the canvas
	erase = (x, y) => {
		this.ctx.globalCompositeOperation = 'destination-out'
		this.ctx.beginPath()
		this.ctx.arc(x, y, this.eraseRadius, 0, Math.PI * 2)
		this.ctx.fill()

		this.props.incrementErases()
	}

	handleClick = (event) => {
		this.erase(event.clientX, event.clientY)
	}

  render() {
		return <canvas
			id="game-canvas"
			ref={ref => this.canvas = ref}
			onClick={this.handleClick}
		>
		</canvas>
  }
}

export default Canvas
