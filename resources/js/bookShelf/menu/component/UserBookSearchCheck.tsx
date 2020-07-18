import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Store } from '~/main/store'
import { changeUserBookSearchMode } from '~/menu/store/UserBookSearchMode'
import styled from 'styled-components'

const Div = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  width: 16rem;
  height: 1.8rem;
`

const InputCheckBox = styled.input`
  display: none;

  &:checked+label::before {
    content: "\\02713";  
  }
`
const Label = styled.label`
  &::before {
    content: "";
    width: 1.8rem;
    height: 1.8rem;
    font-size: 2rem;
    color: #333;
    background: #FFF;
    position: absolute;
    top: 0;
    left: 0;
  }
`

const UserBookSearchCheck: React.FC = () => {

	const dispatch = useDispatch() 

	return (
		<Div>
			<InputCheckBox type="checkbox" onChange={()=>{
        
				dispatch(changeUserBookSearchMode())
        
			}} id="user-search-option" />
			<Label htmlFor="user-search-option">マイブック検索</Label>
		</Div>
	)
}

export default UserBookSearchCheck
