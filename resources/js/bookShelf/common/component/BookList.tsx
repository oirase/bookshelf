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

interface Props {
  book: BookType
  button: ReactNode
  bg: string
} 

const BookList: React.FC<Props> = ({ book, button, bg }) => {

  const BookListDom = searchBookList.map((searchBook, index) => {

    return (
      <Div key={index}>
        <Book {...book} />
        { button }
      </Div>
    )
  })

  return (
    <BookList>
      {BookListDom}
    </BookList>
  )
}

export default SearchBookList
