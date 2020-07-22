import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Store } from '~/main/store'
import * as useAxios from '~/common/hooks/useAxios'
import { setUserBookList } from '~/user/store/UserBookList'
import { setUserBookIdList } from '~/user/store/UserBookIdList'
import { setUserTotalItems } from '~/user/store/UserTotalItems'
import { getBookDataError, clearError } from '~/common/store/ErrorMessage'

const useGetUserBookData = () => {

	const order = useSelector((state: Store) => state.UserOrder)
	const selectPage = useSelector((state: Store) => state.UserSelectPage)
	const errorMessage = useSelector((state: Store) => state.ErrorMessage)
	const userUpdate = useSelector((state: Store) => state.UserUpdate)
	const dispatch = useDispatch()
	const axios = useAxios.post('user', { selectPage, order })

	const setUserData = () => {
    
		axios()
			.then(res => {
      
				dispatch(setUserBookList(res.data.items))
				dispatch(setUserBookIdList(res.data.bookIdList))
				selectPage === 1 && dispatch(setUserTotalItems(res.data.totalItems))
				errorMessage && dispatch(clearError())
			})
			.catch(error => {
      
				dispatch(getBookDataError())
				console.log(error)
			})
	}

	React.useEffect( setUserData, [selectPage, order, userUpdate] )

}

export default useGetUserBookData
