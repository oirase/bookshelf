import * as React from 'react'
import { useSelector } from 'react-redux'
import { Store } from '~/main/store'
import ErrorMessage from '~/common/component/ErrorMessage'
import Loding from '~/common/component/Loding'
import styled from 'styled-components'
import { color } from '~/common/style'

const Div = styled.div`
  height: 7rem;
  display: flex;
  align-items: center;
  text-align: center;
  line-height: 1.5;
`

const SearchMessage: React.FC = () => {

	const searchTotalItems = useSelector((state: Store) => state.SearchTotalItems)
	const searchBookList = useSelector((state: Store) => state.SearchBookList)
	const searchWord = useSelector((state: Store) => state.SearchWord)
	const errorMessage = useSelector((state: Store) => state.ErrorMessage)
	const lodingState = useSelector((state: Store) => state.LodingState)

	let SearchResult
  
	if(lodingState || errorMessage) {
		SearchResult = null
	} else if (!searchWord) {
		SearchResult =　'検索語句を入力して下さい'
	}　else if(!searchTotalItems) {
		SearchResult = '書籍が見つかりませんでした'
	} else if (searchBookList.length === 0) {
		SearchResult = 'このページ以降は検索結果がありません'
	} else {
		SearchResult = `検索数 ${searchTotalItems}　件`
	}

	return (
		<Div>
			{ errorMessage ? <ErrorMessage /> : <Loding /> }
			{ SearchResult && <p>{SearchResult}</p> }
		</Div>
	)
}

export default SearchMessage 
