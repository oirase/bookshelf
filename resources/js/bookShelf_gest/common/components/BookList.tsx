import * as React from 'react'
import BookListType from '@/common/type/BookList'
import { BookType } from '@/common/type/BookList'
import Book from '@/common/components/Book'
import styled from 'styled-components'

const BookListWapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-content: flex-start;
  padding-top: 1.5rem;
  min-height: 80vh;
  width: 100%;
`

const Div = styled.div`
  margin-bottom: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`

interface Props {
  bookDataList: BookListType
}


const BookList: React.FC<Props> = ({ bookDataList }) => {


  const BookListDom = bookDataList.map((bookData, index) => (
    <Div key={index}>
      <Book {...bookData} />
    </Div>
  ))

  return (
    <BookListWapper>
      {BookListDom}
    </BookListWapper>
  )
}

export default BookList
