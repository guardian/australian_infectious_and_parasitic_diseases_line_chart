import loadJson from '../components/load-json/'
import { Health } from './modules/health'

const app = {

	init: () => {

		loadJson('https://interactive.guim.co.uk/docsdata/1IRGyMr0bqUhKReesVdvW4dev8SBw8kwQIO8zv2xpaqU.json?t=' + new Date().getTime())
			.then((resp) => {
				new Health(resp.sheets.data)
			})

	}

}

app.init()