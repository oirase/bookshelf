import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = 'created_at DESC'

const slice = createSlice({
	name: 'userOrder',
	initialState,
	reducers: {
		setUserOrder: (state: string, { payload }: PayloadAction<string>) => (
			payload
		)
	}
})

export const { setUserOrder } = slice.actions

export const  UserOrder = slice.reducer
