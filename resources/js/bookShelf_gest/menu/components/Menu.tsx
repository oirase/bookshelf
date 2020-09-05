import * as React from 'react'
import SearchBox from '@/menu/components/SearchBox'
import ChangeModeButton from '@/menu/components/ChangeModeButton'
import SearchOrderSelect from '@/search/components/SearchOrderSelect'
import styled from 'styled-components'
//import { CangeModeContext } from '@/main/components/BookListPage'

const Nav = styled.nav`
  background: #990000;
  color: #FFF;
  padding-top: 1.7rem;
  height: 14rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

const Menu: React.FC = () => {

	return (
		<Nav>
			<SearchOrderSelect />
			<SearchBox />
			<ChangeModeButton />
		</Nav>
	)
}

export default Menu
