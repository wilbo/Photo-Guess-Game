import credentials from './credentials'

const API_APP_NAME = 'photo_guess_game'
const API_URL = 'https://api.unsplash.com/'
const API_ID = credentials.appId
const FETCH_HEADER = { headers: { 'Authorization': 	'Client-ID ' + API_ID } }

const constants = {
	API_APP_NAME,
	API_URL,
	API_ID,
	FETCH_HEADER
}

export default constants