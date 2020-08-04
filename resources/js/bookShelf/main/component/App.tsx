import React from 'react'
import {
	BrowserRouter as Router,
	Switch,
	Route
} from 'react-router-dom'
import BookListPage from './BookListPage'
import BookPage from './BookPage'
  

const App: React.FC = () => {

	return (
		<Router>
			<div>
				<Switch>
					<Route
						exact path="/bookshelf"
						component={BookListPage}
					/>
					<Route
						path="/bookshelf/book"
						component={BookPage}
					/>
				</Switch>
			</div>
		</Router>
	)
}

export default App
