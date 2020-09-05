import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import BookListType from '~/common/type/BookList'


const initialState: BookListType = []

const slice = createSlice({
	name: 'userBookList',
	initialState,
	reducers: {
		setUserBookList: (state: BookListType, { payload }: PayloadAction<BookListType>) => (
			payload
		)
	}
})

export const { setUserBookList } = slice.actions


export const UserBookList = slice.reducer
