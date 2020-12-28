import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Store } from '~/main/store'
import { setSearchSelectPage } from '~/search/store/SearchSelectPage'
import { setSearchWord } from '~/menu/store/SearchWord'
import { changeSearchMode } from '~/menu/store/SearchMode'
import styled from 'styled-components'
import { color } from '@/common/style'

const Div = styled.div`
  height: 2.8rem;
`

const Button = styled.button`
  width: 10rem;
  height: 100%;
  font-size: 1.8rem;
  font-weight: bold;
  color: #FFF;
  border: none;
  background: ${color.orange};
`

const InputText = styled.input`
  height: 100%;
  padding: 0 5px;
  width: 14.5rem;
  border: none;
  background: #FFF;
`

const SearchBox: React.FC = () => {

	const searchWord = useSelector((state: Store) => state.SearchWord)
	const searchMode = useSelector((state: Store) => state.SearchMode)

	const searchInput = React.useRef<HTMLInputElement>(null)
	const dispatch = useDispatch()

	const getDataHandleClick = () => {
		if(searchInput.current == null || !searchInput.current.value) return

		searchMode || dispatch(changeSearchMode(true))
		dispatch(setSearchWord(searchInput.current.value))
		dispatch(setSearchSelectPage(1))
	}

	const keyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			getDataHandleClick()
		}
	}

	React.useEffect(()=>{
		if (searchInput.current) {
			searchInput.current.value = searchWord
		}
	}, [searchWord])


	return (
		<Div>
			<InputText type="text" name="searchWord" ref={searchInput} onKeyPress={keyPress} />
			<Button onClick={getDataHandleClick}>検索</Button>
		</Div>
	)

}


export default SearchBox
