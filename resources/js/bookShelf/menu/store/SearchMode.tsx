import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = false

const slice = createSlice({
	name: 'searchMode',
	initialState,
	reducers: {
		changeSearchMode: (state: boolean, { payload }: PayloadAction<boolean>) => (
			payload
		)
	}
})

export const { changeSearchMode } = slice.actions

export const SearchMode = slice.reducer
