import * as React from 'react'
import { useSelector } from 'react-redux'
import { Store } from '~/main/store'
import Book from '~/common/components/Book'
import AddBookButton from '~/search/components/AddBookButton'
import DeleteBookButton from '~/user/components/DeleteBookButton'
import BookList from '~/common/components/BookList'
import { BookType } from '~/common/type/BookList'


const SearchBookList: React.FC = () => {

  const searchBookList = useSelector((state: Store) => state.SearchBookList)
  const userBookSearchMode = useSelector((state: Store) => state.UserBookSearchMode)
  const userBookSearchModeCallback = React.useCallback(
    () => userBookSearchMode
  , [searchBookList])

  const button = (book: BookType): React.ReactElement => (
          userBookSearchModeCallback() ?
          <DeleteBookButton bookId={book.bookId} /> :
          <AddBookButton book={book} />
        )

  return (
    <BookList bookDataList={searchBookList} render={button} />
  )
}

export default SearchBookList
