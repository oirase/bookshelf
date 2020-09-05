import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = 'relevance'

const slice = createSlice({
	name: 'searchOrder',
	initialState,
	reducers: {
		setSearchOrder: (state: string, { payload }: PayloadAction<string>) => (
			payload
		)
	}
})

export const { setSearchOrder } = slice.actions

export const  SearchOrder = slice.reducer
