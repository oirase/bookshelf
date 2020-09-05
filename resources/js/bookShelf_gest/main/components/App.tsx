import React from 'react'
import {
	BrowserRouter as Router,
	Switch,
	Route
} from 'react-router-dom'
import BookListPage from './BookListPage'
import BookPage from './BookPage'
import { topPageRoute, bookPageRoute } from '@/common/config'

const App: React.FC = () => {

	return (
		<Router>
			<div>
				<Switch>
					<Route
						//exact path="/bookshelf"
						exact path={topPageRoute}
						component={BookListPage}
					/>
					<Route
						//path="/bookshelf/book"
						path={bookPageRoute}
						component={BookPage}
					/>
				</Switch>
			</div>
		</Router>
	)
}

export default App
