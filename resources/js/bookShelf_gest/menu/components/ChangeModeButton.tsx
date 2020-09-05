import * as React from 'react'
import { useDispatch } from 'react-redux'
import { changeSearchMode } from '@/menu/store/SearchMode'
import styled from 'styled-components'
import { color } from '@/common/style'

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  width: 30.8rem;
`

const Button = styled.button<{ user?: boolean, search?: boolean }>`
  width: 15rem;
  height: 5rem;
  color: ${props => (props.user && '#333') || (props.search && '#333')};
  font-size: 2.3rem;
  background: ${props => (props.user && color.user) || (props.search && color.search) };
`

const ChangeModeButton: React.FC = () => {


	const dispatch = useDispatch()


	return (
		<Div>
			<Button user onClick={()=>{dispatch(changeSearchMode(false))}}>本棚</Button>
			<Button search onClick={()=>{dispatch(changeSearchMode(true))}}>検索</Button>
		</Div>
	)
}

export default ChangeModeButton
