import * as React from 'react'
import { useDispatch } from 'react-redux'
import { setSearchOrder } from '@/search/store/SearchOrder'
import { setSearchSelectPage } from '@/search/store/SearchSelectPage'
import OrderSelect from '@/common/components/OrderSelect'

const SearchOrderSelect = () => {

	const dispatch = useDispatch()

	const OrderHandleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		dispatch(setSearchOrder(e.target.value))
		dispatch(setSearchSelectPage(1))
	}

	return (
		<OrderSelect handleChange={OrderHandleChange}>
			<option value="relevance">関連度の高い順</option>
			<option value="newest">登録日が新しい順</option>
		</OrderSelect>
	)
}

export default SearchOrderSelect
