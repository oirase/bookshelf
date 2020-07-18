import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'

import { 
	ErrorMessage, 
	LodingState } from '~/common/store'

import { 
	UserBookList,
	UserOrder,
	UserBookIdList,
	UserSelectPage,
	UserTotalItems,
	UserUpdate } from '~/user/store'

import { 
	SearchBookList,
	SearchOrder,
	SearchSelectPage,
	SearchTotalItems,
	SearchUpdate } from '~/search/store'
  
import {
	SearchWord,
	SearchMode,
	UserBookSearchMode } from '~/menu/store'

const reducer = combineReducers({
	ErrorMessage,
	LodingState,
	UserBookList,
	UserOrder,
	UserBookIdList,
	UserSelectPage,
	UserTotalItems,
	UserUpdate,
	SearchBookList,
	SearchOrder,
	SearchSelectPage,
	SearchTotalItems,
	SearchUpdate,
	SearchWord,
	SearchMode,
	UserBookSearchMode,

})

export type Store = ReturnType<typeof reducer>

const store = configureStore({ reducer })

export default store 
