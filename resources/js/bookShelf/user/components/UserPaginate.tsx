import * as React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Store } from '~/main/store'
import { setUserSelectPage } from '~/user/store/UserSelectPage'
import Paginate from '~/common/components/Paginate'


const UserPaginate: React.FC<{option?: ()=>void}> = (props) => {

	const totalItems = useSelector((state: Store) => state.UserTotalItems)
	const selectPage = useSelector((state: Store) => state.UserSelectPage)
	const order = useSelector((state: Store) => state.UserOrder)

	const dispatch = useDispatch()
	const firstUpdate = React.useRef(true)

	const changePage =  (value: number) => {
		dispatch(setUserSelectPage(value))
		props.option && props.option()
	}

	React.useEffect(()=>{
		if (firstUpdate.current) {
			firstUpdate.current = false
			return
		}
		dispatch(setUserSelectPage(1))

	}, [order])

	return (
		<Paginate
			totalItems={totalItems}
			selectPage={selectPage}
			handleClick={changePage} />
	)
}

export default UserPaginate
