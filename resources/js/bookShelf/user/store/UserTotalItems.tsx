import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = 0

const slice = createSlice({
	name: 'userTotalItems',
	initialState,
	reducers: {
		setUserTotalItems: (state: number, { payload }: PayloadAction<number>) => (
			payload
		)
	}
})

export const { setUserTotalItems } = slice.actions

export const UserTotalItems = slice.reducer
