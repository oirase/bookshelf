import { createSlice } from '@reduxjs/toolkit'

const initialState = false

const slice = createSlice({
	name: 'lodingState',
	initialState,
	reducers: {
		LodingStart: (state: boolean) => (
			true
		),
		LodingEnd: (state: boolean) => (
			false
		),
	}
})

export const { LodingStart, LodingEnd } = slice.actions

export const LodingState = slice.reducer
