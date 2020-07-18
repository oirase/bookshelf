import { createSlice } from '@reduxjs/toolkit'

const initialState = false

const slice = createSlice({
	name: 'searchUpdate',
	initialState,
	reducers: {
		updateSearchBookList: (state: boolean) => (
			!state
		)
	}
})

export const { updateSearchBookList } = slice.actions

export const  SearchUpdate = slice.reducer
