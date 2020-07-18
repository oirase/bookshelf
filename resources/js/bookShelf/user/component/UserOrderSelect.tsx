import * as React from 'react'
import { useDispatch } from 'react-redux'
import { setUserOrder } from '~/user/store/UserOrder'
import styled from 'styled-components'

const Select = styled.select`
  background: #FFF;
  width: 20rem;
  text-align: center;
  padding: 1px 0;
`

const UserOrderSelect = () => {

	const dispatch = useDispatch()

	const userOrderHandleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		dispatch(setUserOrder(e.target.value))
    
	}

	return (
		<Select name="order" onChange={userOrderHandleChange}>
			<option value="created_at DESC">登録日が新しい順</option>
			<option value="created_at ASC">登録日が古い順</option>
			<option value="published_date DESC">出版日が新しい順</option>
			<option value="published_date ASC">出版日が古い順</option>
		</Select>
	)
}

export default UserOrderSelect
