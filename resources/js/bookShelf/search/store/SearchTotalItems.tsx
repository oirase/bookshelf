import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = 0

const slice = createSlice({
	name: 'searchTotalItems',
	initialState,
	reducers: {
		setSearchTotalItems: (state: number, { payload }: PayloadAction<number>) => (
			payload
		)
	}
})

export const { setSearchTotalItems } = slice.actions

export const SearchTotalItems = slice.reducer
