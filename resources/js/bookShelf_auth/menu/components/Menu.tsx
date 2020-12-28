import * as React from 'react'
import { useSelector } from 'react-redux'
import { Store } from '~/main/store'
import SearchBox from '~/menu/components/SearchBox'
import ChangeModeButton from '~/menu/components/ChangeModeButton'
import UserBookSearchCheck from '~/menu/components/UserBookSearchCheck'
import UserOrderSelect from '~/user/components/UserOrderSelect'
import SearchOrderSelect from '~/search/components/SearchOrderSelect'
import styled from 'styled-components'
//import { CangeModeContext } from '~/main/components/BookListPage'
import { color } from '@/common/style'

const Nav = styled.nav`
  background: ${color.brown};
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
