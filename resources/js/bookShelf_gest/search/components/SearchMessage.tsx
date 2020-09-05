import * as React from 'react'
import { useSelector } from 'react-redux'
import { Store } from '@/main/store'
import Message from '@/common/components/Message'

const SearchMessage: React.FC = () => {

	const searchTotalItems = useSelector((state: Store) => state.SearchTotalItems)
	const searchBookList = useSelector((state: Store) => state.SearchBookList)
	const searchWord = useSelector((state: Store) => state.SearchWord)
	const errorMessage = useSelector((state: Store) => state.ErrorMessage)
	const lodingState = useSelector((state: Store) => state.LodingState)

	let result

	if(lodingState || errorMessage) {
		result = null
	} else if (!searchWord) {
		result =　'検索語句を入力して下さい'
	}　else if(!searchTotalItems) {
		result = '書籍が見つかりませんでした'
	} else if (searchBookList.length === 0) {
		result = 'このページ以降は検索結果がありません'
	} else {
		result = `検索数 ${searchTotalItems}　件`
	}

	return <Message result={result} error={errorMessage} />
}

export default SearchMessage
