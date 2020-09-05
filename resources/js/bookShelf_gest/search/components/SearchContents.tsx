import * as React from 'react'
import Contents from '@/common/components/Contents'
import SearchPaginate from '@/search/components/SearchPaginate'
import SearchMessage from '@/search/components/SearchMessage'
import SearchBookList from '@/search/components/SearchBookList'
import { color } from '@/common/style'

const SearchContents: React.FC = () => {

	return (
		<Contents color={color.search}>
			<SearchMessage />
			<SearchPaginate />
			<SearchBookList />
			<SearchPaginate option={()=>{window.scroll(0, 150)}} />
		</Contents>
	)
}

export default SearchContents
