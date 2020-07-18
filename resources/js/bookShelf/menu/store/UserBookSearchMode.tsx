import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = false

const slice = createSlice({
	name: 'userBookSearchMode',
	initialState,
	reducers: {
		changeUserBookSearchMode: (state: boolean) => (
			!state
		)
	}
})

export const { changeUserBookSearchMode } = slice.actions

export const UserBookSearchMode = slice.reducer
