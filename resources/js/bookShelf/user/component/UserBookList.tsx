import * as React from 'react'
import { useSelector } from 'react-redux'
import { Store } from '~/main/store'
import DeleteBookButton from '~/user/component/DeleteBookButton'
import Book from '~/common/component/Book'
import styled from 'styled-components'


const BookList = styled.div`
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


const UserBookList: React.FC = () => {

	const userBookList = useSelector((state: Store) => state.UserBookList)

	const UserBookListDom = userBookList.map((userBook, index) => (
		<Div key={index}>
			<Book {...userBook} />
			<DeleteBookButton bookId={userBook.bookId} />
		</Div>
	))

	return (
		<BookList>
			{UserBookListDom}
		</BookList>
	)
}

export default UserBookList
