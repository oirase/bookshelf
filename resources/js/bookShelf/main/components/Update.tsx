import * as React from 'react'
import useGetSearchBookData from '~/common/hooks/useGetSearchBookData'
import useGetUserBookData from '~/common/hooks/useGetUserBookData'

const Update: React.FC = () => {

	useGetSearchBookData()
	useGetUserBookData()

	return null
}

export default Update
