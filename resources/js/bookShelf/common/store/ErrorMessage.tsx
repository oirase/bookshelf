import { createSlice } from '@reduxjs/toolkit'

const initialState = ''

const slice = createSlice({
	name: 'errorMessage',
	initialState,
	reducers: {
		getBookDataError: () => (
			'書籍情報の取得に失敗しました。しばらく時間を置いてからページを再読み込みして下さい。'
		),
		addBookError: () => (
			'書籍の追加に失敗しました。しばらく時間を置いてからやり直して下さい。'
		),
		changeBookError: () => (
			'マイブックの変更に失敗しました。しばらく時間を置いてからやり直して下さい。'
		),
		clearError: () => (
			''
		)
	}
})

export const { getBookDataError, addBookError, changeBookError, clearError } = slice.actions

export const  ErrorMessage = slice.reducer
