import * as React from 'react'
import UserPaginate from '~/user/component/UserPaginate'
import UserMessage from '~/user/component/UserMessage'
import UserBookList from '~/user/component/UserBookList'
import styled from 'styled-components'
import { color } from '~/common/style'

const Contents = styled.div`
  background: ${color.user};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 0 2rem 0;
  min-height: 80vh;
`

const UserContents: React.FC = () => {

	return (
		<Contents>
			<UserMessage />
			<UserPaginate />
			<UserBookList />
			<UserPaginate option={()=>{window.scroll(0, 150)}} />
		</Contents>
	)
}

export default UserContents
