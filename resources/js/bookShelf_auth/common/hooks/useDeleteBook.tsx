import * as useAxios from '~/common/hooks/useAxios'
import { Store } from '~/main/store'
import { useDispatch, useSelector } from 'react-redux'
import { updateUserBookList } from '~/user/store/UserUpdate'
import { updateSearchBookList } from '~/search/store/SearchUpdate'
import { changeBookError, clearError } from '~/common/store/ErrorMessage'

const useDeleteBook = (bookId: string) => {

	const dispatch = useDispatch()
	const searchMode = useSelector((state: Store) => state.SearchMode)
	const errorMessage = useSelector((state: Store) => state.ErrorMessage)
	const axios = useAxios.post('delete', { bookId })

	const deleteBook = () => {
		axios()
			.then(() => {
        
				if (searchMode) { 
					dispatch(updateSearchBookList())
					dispatch(updateUserBookList())
				} else {
					dispatch(updateUserBookList())
				}
				errorMessage && dispatch(clearError()) 
			})
			.catch(() => {
        
				dispatch(changeBookError())
			})
	}

	return deleteBook
}

export default useDeleteBook
