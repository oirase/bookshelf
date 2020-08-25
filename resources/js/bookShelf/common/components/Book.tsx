import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Store } from '~/main/store'
import { setSearchWord } from '~/menu/store/SearchWord'
import { setSearchSelectPage } from '~/search/store/SearchSelectPage'
import { changeSearchMode } from '~/menu/store/SearchMode'
import { useHistory } from 'react-router-dom'
import { BookType } from '~/common/type/BookList'
import { bookPageRoute } from '~/common/config'
import styled from 'styled-components'

const Ul = styled.ul`
  width: 210px;
  text-align: center;
  margin-bottom: 0.4rem
`

const Li = styled.li`
  margin-bottom: 0.6rem;
  line-height: 1.6;
`

const A = styled.a`
  margin-right: 1.6rem;
`

const ImgWrapper = styled.li`
  margin-bottom: 1.3rem;
  background: #FFF;
  padding: 3.5rem 0;
  border: 1px solid #FFC49B;
  min-width: 12.8rem;
  min-height: 20rem;
`

const Book: React.FC<BookType> = (props) => {

	const history = useHistory()

	const searchMode = useSelector((state: Store) => state.SearchMode)
     
	const dispatch = useDispatch()

	let authorsDom

	if (props.authors) {
		const { authors } = props
		if (Array.isArray(authors)) {
			authorsDom = authors.map((value, index, array)=> { 
				if(index === array.length - 1) {
					return <a href="" key={index} onClick={(e)=>{getSearchData(e, value)}}>{value}</a>
				}
				return <A href="" key={index} onClick={(e)=>{getSearchData(e, value)}}>{value}</A>
			})
		} else {
			authorsDom = <a href="" onClick={(e)=>{getSearchData(e, authors)}}>{authors}</a>
		}
	}
      

	const getSearchData = (e: React.MouseEvent<HTMLAnchorElement>, authors: string) => {
		e.preventDefault()
		searchMode || dispatch(changeSearchMode(true))
		dispatch(setSearchWord(authors))
		dispatch(setSearchSelectPage(1))
		window.scroll(0, 150)
	}
  

	return (
		<Ul>
			<ImgWrapper  onClick={() => { history.push({ pathname: `${bookPageRoute}/${props.bookId}`, state: props}) }}>{ props.thumbnail && <img src={props.thumbnail} /> }</ImgWrapper>
			{ props.title && <Li>{props.title}</Li> }
			{ authorsDom && <Li>{authorsDom}</Li> }
			{ props.publishedDate && <Li>{props.publishedDate}</Li> }
		</Ul>
	)
}

export default Book
