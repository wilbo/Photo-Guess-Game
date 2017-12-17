import React from 'react'
import constants from '../utils/constants'
import './Attribution.css'

const Attribution = ({ links, name }) => {
	return (
		<div className="component component-attribution">
			Photo by <a href={links.html + '?utm_source=' + constants.API_APP_NAME + '&utm_medium=referral'}>{ name }</a> on <a href={'https://unsplash.com/?utm_source=' + constants.API_APP_NAME + '&utm_medium=referral'}>Unsplash</a>
		</div>
	)
}

export default Attribution 