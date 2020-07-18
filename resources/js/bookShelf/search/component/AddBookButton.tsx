import * as React from 'react'
import { useSelector } from 'react-redux'
import { Store } from '~/main/store'
import { BookType } from '~/common/type/BookList'
import useAddBook from '~/common/hooks/useAddBook'
import styled from 'styled-components'
import { color, ButtonStyle } from '~/common/style'

const AddButton = styled.button`
  ${ButtonStyle}
   background: ${color.add};
   width: 14rem;
   margin-top: auto;
`

const P = styled.p`
   ${ButtonStyle}
   background: ${color.notice};
   line-height: 1.5;
   text-align: center;
   margin-top: auto;
   width: 18rem;
`

interface Props {
  book: BookType
}

const AddBookButton: React.FC<Props> = ({ book }) => {

	const bookIdList = useSelector((state: Store) => state.UserBookIdList)
	const addBook = useAddBook(book)

	return (
		bookIdList.includes(book.bookId) ?
			<P>この本は本棚に<br />登録されています</P> :
			<AddButton onClick={addBook}>本棚に追加</AddButton>
	)
}

export default AddBookButton
