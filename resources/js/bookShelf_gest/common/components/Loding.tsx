import * as React from 'react'
import { useSelector } from 'react-redux'
import { Store } from '@/main/store'
import { lodingImage } from '@/common/config'

const Loding: React.FC = () => {
	const lodingState = useSelector((state: Store) => state.LodingState)

	return lodingState ? <img src={lodingImage} /> : null
}

export default Loding
