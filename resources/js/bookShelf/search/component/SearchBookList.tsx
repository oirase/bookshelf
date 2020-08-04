import * as React from 'react'
import { useSelector } from 'react-redux'
import { Store } from '~/main/store'
import Book from '~/common/component/Book'
import AddBookButton from '~/search/component/AddBookButton'
import DeleteBookButton from '~/user/component/DeleteBookButton'
import styled from 'styled-components'

const Div = styled.div`
  margin-bottom: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const BookList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding-top: 1.5rem;
  min-height: 80vh;
`

const SearchBookList: React.FC = () => {

  const searchBookList = useSelector((state: Store) => state.SearchBookList)
  const userBookSearchMode = useSelector((state: Store) => state.UserBookSearchMode)
  const userBookSearchModeCallback = React.useCallback(
    () => userBookSearchMode
  , [searchBookList])

  const SearchBookListDom = searchBookList.map((searchBook, index) => {

    return (
      <Div key={index}>
        <Book {...searchBook} />
        { userBookSearchModeCallback() ?
          <DeleteBookButton bookId={searchBook.bookId} /> :
          <AddBookButton book={searchBook} /> 
        }
      </Div>
    )
  })

  return (
    <BookList>
      {SearchBookListDom}
    </BookList>
  )
}

export default SearchBookList
