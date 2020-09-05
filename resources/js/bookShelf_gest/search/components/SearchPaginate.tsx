import * as React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Store } from '@/main/store'
import { setSearchSelectPage } from '@/search/store/SearchSelectPage'
import Paginate from '@/common/components/Paginate'

const SearchPaginate: React.FC<{option?: ()=>void}> = (props) => {

	const totalItems = useSelector((state: Store) => state.SearchTotalItems)
	const selectPage = useSelector((state: Store) => state.SearchSelectPage)
	const searchWord = useSelector((state: Store) => state.SearchWord)

	const dispatch = useDispatch()
	const firstUpdate = React.useRef(true)

	const changePage =  (value: number) => {
		dispatch(setSearchSelectPage(value))
		props.option && props.option()
	}


	React.useEffect(()=>{
		if (firstUpdate.current) {
			firstUpdate.current = false
			return
		}
		dispatch(setSearchSelectPage(1))

	}, [searchWord])

	return (
		<Paginate
			totalItems={totalItems}
			selectPage={selectPage}
			handleClick={changePage} />
	)
}

export default SearchPaginate
