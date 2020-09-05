import * as React from 'react'
import { useSelector } from 'react-redux'
import { Store } from '@/main/store'
import BookList from '@/common/components/BookList'


const SearchBookList: React.FC = () => {

  const searchBookList = useSelector((state: Store) => state.SearchBookList)

  return (
    <BookList bookDataList={searchBookList} />
  )
}

export default SearchBookList
