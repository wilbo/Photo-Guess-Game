import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import GameContainer from './containers/GameContainer'

import 'normalize.css'
import './index.css'

ReactDOM.render(<GameContainer />, document.getElementById('root'))
registerServiceWorker()
