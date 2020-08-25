import * as React from 'react'
import { useSelector } from 'react-redux'
import { Store } from '~/main/store'
import DeleteBookButton from '~/user/components/DeleteBookButton'
import Book from '~/common/components/Book'
import BookList from '~/common/components/BookList'
import { BookType } from '~/common/type/BookList'


const UserBookList: React.FC = () => {

	const userBookList = useSelector((state: Store) => state.UserBookList)

    const button = (book: BookType):React.ReactElement => <DeleteBookButton bookId={book.bookId} />

	return <BookList bookDataList={userBookList} render={button} />
}

export default UserBookList
