import * as React from 'react'
import { useSelector } from 'react-redux'
import { Store } from '~/main/store'
import Update from '~/main/component/Update'
import Scroll from '~/main/component/Scroll'
import Menu from '~/menu/component/Menu'
import UserContents from '~/user/component/UserContents'
import SearchContents from '~/search/component/SearchContents'


const BookListPage: React.FC = () => {


	const searchMode = useSelector((state: Store) => state.SearchMode)


	return (
  
		<div className="home">
			<Update />
			<Scroll />
			<Menu />
			{ searchMode ? <SearchContents /> : <UserContents /> }
		</div>
  
	)
}

export default BookListPage
