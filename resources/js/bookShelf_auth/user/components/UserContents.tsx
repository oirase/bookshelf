import * as React from 'react'
import Contents from '~/common/components/Contents'
import UserPaginate from '~/user/components/UserPaginate'
import UserMessage from '~/user/components/UserMessage'
import UserBookList from '~/user/components/UserBookList'
import { color } from '~/common/style'

const UserContents: React.FC = () => {

	return (
		<Contents color={color.user}>
			<UserMessage />
			<UserPaginate />
			<UserBookList />
			<UserPaginate option={()=>{window.scroll(0, 150)}} />
		</Contents>
	)
}

export default UserContents
