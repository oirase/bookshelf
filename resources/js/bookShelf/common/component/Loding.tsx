import * as React from 'react'
import { useSelector } from 'react-redux'
import { Store } from '~/main/store'

const Loding: React.FC = () => {
	const lodingState = useSelector((state: Store) => state.LodingState)

	return lodingState ? <img src="https://bookshelf-booksearch.herokuapp.com/image/89-32.gif" /> : null
}

export default Loding
