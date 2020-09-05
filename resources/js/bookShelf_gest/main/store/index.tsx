import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'

import {
	ErrorMessage,
	LodingState } from '@/common/store'

import {
	SearchBookList,
	SearchOrder,
	SearchSelectPage,
	SearchTotalItems,
	SearchUpdate } from '@/search/store'

import {
	SearchWord,
	SearchMode } from '@/menu/store'

const reducer = combineReducers({
	ErrorMessage,
	LodingState,
	SearchBookList,
	SearchOrder,
	SearchSelectPage,
	SearchTotalItems,
	SearchUpdate,
	SearchWord,
	SearchMode
})

export type Store = ReturnType<typeof reducer>

const store = configureStore({ reducer })

export default store
