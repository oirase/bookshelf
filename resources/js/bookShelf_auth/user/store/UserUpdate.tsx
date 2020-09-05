import { createSlice } from '@reduxjs/toolkit'

const initialState = false

const slice = createSlice({
	name: 'userUpdate',
	initialState,
	reducers: {
		updateUserBookList: (state: boolean) => (
			!state
		)
	}
})

export const { updateUserBookList } = slice.actions

export const  UserUpdate = slice.reducer
