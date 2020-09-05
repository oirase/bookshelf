import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: string[] = []

const slice = createSlice({
	name: 'userBookIdList',
	initialState,
	reducers: {
		setUserBookIdList: (state: string[], action: PayloadAction<string[]>) => {
			return action.payload
		},
		addUserBookIdList: (state: string[], { payload }: PayloadAction<string>) => (
			[...state, payload]
		)
	}
})

export const { setUserBookIdList, addUserBookIdList } = slice.actions

export const  UserBookIdList = slice.reducer
