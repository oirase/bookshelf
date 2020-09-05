import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = 1

const slice = createSlice({
	name: 'userSelectPage',
	initialState,
	reducers: {
		setUserSelectPage: (state: number, { payload }: PayloadAction<number>) => (
			payload
		)
	}
})

export const { setUserSelectPage } = slice.actions

export const  UserSelectPage = slice.reducer
