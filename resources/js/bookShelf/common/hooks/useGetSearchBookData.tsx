import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Store } from '~/main/store'
import * as useAxios from '~/common/hooks/useAxios'
import { setSearchTotalItems } from '~/search/store/SearchTotalItems'
import { setSearchBookList } from '~/search/store/SearchBookList'
import { getBookDataError, clearError } from '~/common/store/ErrorMessage'

const useGetSearchBookData = () => {

	const selectPage = useSelector((state: Store) => state.SearchSelectPage)
	const searchWord = useSelector((state: Store) => state.SearchWord)
	const order = useSelector((state: Store) => state.SearchOrder)
	const userBookSearchMode = useSelector((state: Store) => state.UserBookSearchMode)
	const searchUpdate = useSelector((state: Store) => state.SearchUpdate)
	const errorMessage = useSelector((state: Store) => state.ErrorMessage)

	const url = userBookSearchMode ? 'user/search' : 'search'
	const axios = useAxios.post(url, { searchWord, selectPage, order })

	const dispatch = useDispatch()

	const getSearchData =  () => {
    
		if(!searchWord) return
		axios()
			.then(res => {
        
				selectPage === 1 && dispatch(setSearchTotalItems(res.totalItems))
				dispatch(setSearchBookList(res.items))
				errorMessage && dispatch(clearError()) 
			})
			.catch(error => {
        
				dispatch(getBookDataError())
			})
	}

	React.useEffect(getSearchData, [searchWord, selectPage, order, searchUpdate])

}

export default useGetSearchBookData
