import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import BookListType from '@/common/type/BookList'

const initialState: BookListType = []

const slice = createSlice({
	name: 'searchBookList',
	initialState,
	reducers: {
		setSearchBookList: (state: BookListType, { payload }: PayloadAction<BookListType>) => (
			payload
		)
	}
})

export const { setSearchBookList } = slice.actions


export const SearchBookList = slice.reducer
