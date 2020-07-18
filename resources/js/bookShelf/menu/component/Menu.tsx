import * as React from 'react'
import { useSelector } from 'react-redux'
import { Store } from '~/main/store'
import SearchBox from '~/menu/component/SearchBox'
import ChangeModeButton from '~/menu/component/ChangeModeButton'
import UserBookSearchCheck from '~/menu/component/UserBookSearchCheck'
import UserOrderSelect from '~/user/component/UserOrderSelect'
import SearchOrderSelect from '~/search/component/SearchOrderSelect'
import styled from 'styled-components'
//import { CangeModeContext } from '~/main/component/BookListPage'

const Nav = styled.nav`
  background: #990000;
  color: #FFF;
  padding-top: 1.7rem;
  height: 17.7rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

const Menu: React.FC = () => {

	const searchMode = useSelector((state: Store) => state.SearchMode)

	return (
		<Nav>
			{ searchMode ? <SearchOrderSelect /> : <UserOrderSelect /> }
			<SearchBox />
			<UserBookSearchCheck />
			<ChangeModeButton />
		</Nav>
	)
}

export default Menu
