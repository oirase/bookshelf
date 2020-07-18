import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from '~/main/component/App'
import store from '~/main/store'



render(
	<Provider store={store}> 
		<App />
	</Provider>,
	document.getElementById('root')
)
