import { useSelector, useDispatch } from 'react-redux'
import * as useAxios from '~/common/hooks/useAxios'
import { Store } from '~/main/store'
import { updateUserBookList } from '~/user/store/UserUpdate'
import { addUserBookIdList } from '~/user/store/UserBookIdList'
import { changeBookError, clearError } from '~/common/store/ErrorMessage'
import { BookType } from '~/common/type/BookList'


const useAddBook = (book: BookType) => {

	const bookIdList = useSelector((state: Store) => state.UserBookIdList)
	const dispatch = useDispatch()
	const data = JSON.stringify(book)
	const errorMessage = useSelector((state: Store) => state.ErrorMessage)
	const axios = useAxios.post('insert', { 'addBook': data })


	const addBook = async () => {

		axios()
			.then(res => {
      	console.log(res)
				dispatch(addUserBookIdList(book.bookId))
				dispatch(updateUserBookList())
				errorMessage && dispatch(clearError()) 
			})
			.catch(error=> {
      	console.log(error)
				dispatch(changeBookError())
			})

	}

	return addBook

}

export default useAddBook
