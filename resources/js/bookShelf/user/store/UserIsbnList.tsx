import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: string[] = []

const slice = createSlice({
	name: 'userIsbnList',
	initialState,
	reducers: {
		setUserIsbnList: (state: string[], action: PayloadAction<string[]>) => {
			return action.payload
		},
		addUserIsbnList: (state: string[], { payload }: PayloadAction<string>) => (
			[...state, payload]
		)
	}
})

export const { setUserIsbnList, addUserIsbnList } = slice.actions

export const  UserIsbnList = slice.reducer
