import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = ''

const slice = createSlice({
	name: 'searchWord',
	initialState,
	reducers: {
		setSearchWord: (state: string, { payload }: PayloadAction<string>) => (
			payload
		)
	}
})

export const { setSearchWord } = slice.actions

export const SearchWord = slice.reducer
