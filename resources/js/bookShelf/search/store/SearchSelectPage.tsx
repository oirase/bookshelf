import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = 1

const slice = createSlice({
	name: 'searchSelectPage',
	initialState,
	reducers: {
		setSearchSelectPage: (state: number, { payload }: PayloadAction<number>) => (
			payload
		)
	}
})

export const { setSearchSelectPage } = slice.actions

export const  SearchSelectPage = slice.reducer
