import * as React from 'react'
import { useDispatch } from 'react-redux'
import { setUserOrder } from '~/user/store/UserOrder'
import OrderSelect from '~/common/components/OrderSelect'

const UserOrderSelect = () => {

	const dispatch = useDispatch()

	const OrderHandleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		dispatch(setUserOrder(e.target.value))
	}

	return (
		<OrderSelect handleChange={OrderHandleChange}>
			<option value="created_at DESC">登録日が新しい順</option>
			<option value="created_at ASC">登録日が古い順</option>
			<option value="published_date DESC">出版日が新しい順</option>
			<option value="published_date ASC">出版日が古い順</option>
		</OrderSelect>
	)
}

export default UserOrderSelect
