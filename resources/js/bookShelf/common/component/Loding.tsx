import * as React from 'react'
import { useSelector } from 'react-redux'
import { Store } from '~/main/store'

const Loding: React.FC = () => {
	const lodingState = useSelector((state: Store) => state.LodingState)

	return lodingState ? <img src="http://networkdesign.s1005.xrea.com/bookshelf/image/89-32.gif" /> : null
}

export default Loding
