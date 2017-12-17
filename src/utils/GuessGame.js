class GuessGame {
	state = 0 // 0 = playing, 1 = right, 2 = wrong
	erases = 0
	image = ''

	constructor(categories) {
		this.categories = categories

		this.answers = this.randomAnswers()
		this.answer = this.randomAnswer()
	}

	randomValue(arr) {
		return arr[Math.floor(Math.random() * arr.length)]
	}

	randomAnswer() {
		if (!this.answers || this.answers.length !== 4) {
			this.answers = this.randomAnswers()
		}

		return this.randomValue(this.answers)
	}

	randomAnswers() {
		const answers = []
		const randomCategory = this.randomValue(this.categories)
		
		while (answers.length < 4) {
			const randomAnswer = this.randomValue(randomCategory)

			// Check if it's not already in answers
			if (answers.indexOf(randomAnswer) === -1) {
				answers.push(randomAnswer)
			}
		}
		
		return answers
	}
}

export default GuessGame