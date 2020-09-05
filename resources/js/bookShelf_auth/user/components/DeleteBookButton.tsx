import * as React from 'react'
import useDeleteBook from '~/common/hooks/useDeleteBook'
import styled from 'styled-components'
import { color, ButtonStyle } from '~/common/style'

const Button = styled.button`
  ${ButtonStyle}
  background: ${color.delete};
  width: 10rem;
  margin-top: auto;
`

interface Props {
  bookId: string
}

const DeleteBookButton: React.FC<Props> = ({ bookId }) => {

	const deleteBook = useDeleteBook(bookId)

	return <Button　onClick={deleteBook}>削除</Button>
}

export default DeleteBookButton
