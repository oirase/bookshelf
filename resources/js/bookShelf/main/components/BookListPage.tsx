import * as React from 'react'
import { useSelector } from 'react-redux'
import { Store } from '~/main/store'
import Update from '~/main/components/Update'
import ScrollButton from '~/main/components/ScrollButton'
import Menu from '~/menu/components/Menu'
import UserContents from '~/user/components/UserContents'
import SearchContents from '~/search/components/SearchContents'


const BookListPage: React.FC = () => {


	const searchMode = useSelector((state: Store) => state.SearchMode)

  document.title = 'Bookshelf'

	return (

		<div className="home">
			<Update />
			<ScrollButton />
			<Menu />
			{ searchMode ? <SearchContents /> : <UserContents /> }
		</div>

	)
}

export default BookListPage
