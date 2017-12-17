import React, { Component } from 'react'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'

import Game from './pages/Game'

class Router extends Component {
  render() {
    return (
			<BrowserRouter>
				<div className="full-height">
					<Switch>
						<Route exact path="/" component={Game}/>
						<Redirect to="/" />
					</Switch>
				</div>
			</BrowserRouter>
    )
  }
}

export default Router
