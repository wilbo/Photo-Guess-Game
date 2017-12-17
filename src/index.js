import React from 'react'
import ReactDOM from 'react-dom'
import Router from './Router'
import registerServiceWorker from './registerServiceWorker'

import 'normalize.css'
import './index.css'

ReactDOM.render(<Router />, document.getElementById('root'))
registerServiceWorker()
