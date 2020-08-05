import * as React from 'react'
import SearchPaginate from '~/search/component/SearchPaginate'
import SearchMessage from '~/search/component/SearchMessage'
import SearchBookList from '~/search/component/SearchBookList'
import styled from 'styled-components'
import { color } from '~/common/style'

const Contents = styled.div`
  background: ${color.search};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 0 2.5rem 0;
  min-height: 80vh;
`

const SearchContents: React.FC = () => {

	return (
		<Contents>
			<SearchMessage />
			<SearchPaginate />
			<SearchBookList />
			<SearchPaginate option={()=>{window.scroll(0, 150)}} />
		</Contents>
	)
}

export default SearchContents
