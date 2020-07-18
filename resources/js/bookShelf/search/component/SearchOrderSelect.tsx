import * as React from 'react'
import { Store } from '~/main/store'
import { useDispatch, useSelector } from 'react-redux'
import { setSearchOrder } from '~/search/store/SearchOrder'
import { setSearchSelectPage } from '~/search/store/SearchSelectPage'
import styled from 'styled-components'

const Select = styled.select`
  background: #FFF;
  width: 20rem;
  text-align: center;
  padding: 1px 0;
`

const SearchOrderSelect = () => {

	const dispatch = useDispatch()

	const searchOrderHandleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		dispatch(setSearchOrder(e.target.value))
		dispatch(setSearchSelectPage(1))
    
	}

	return (
		<Select name="order" onChange={searchOrderHandleChange}>
			<option value="relevance">関連度の高い順</option>
			<option value="newest">登録日が新しい順</option>
		</Select>
	)
}

export default SearchOrderSelect
