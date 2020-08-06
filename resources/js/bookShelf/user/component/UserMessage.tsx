import * as React from 'react'
import { useSelector } from 'react-redux'
import { Store } from '~/main/store'
import ErrorMessage from '~/common/component/ErrorMessage'
import Loding from '~/common/component/Loding'
import styled from 'styled-components'

const Div = styled.div`
  height: 7rem;
  display: flex;
  align-items: center;
  text-align: center;
  line-height: 1.5;
`

const P = styled.p`
  //height: 5rem;
  padding-bottom: 2.5rem;
`

const UserMessage: React.FC = () => {

	const userTotalItems = useSelector((state: Store) => state.UserTotalItems)
	const errorMessage = useSelector((state: Store) => state.ErrorMessage)
	const lodingState = useSelector((state: Store) => state.LodingState)

	let userResult

	if(lodingState || errorMessage) {
		userResult = null
	} else if(!userTotalItems) {
		userResult = <>
      <P>本棚に書籍が登録されていません。</P>
      <P>新しく書籍を追加する場合は検索結果から本棚に追加するボタンをクリックして下さい。</P>
		</>
	} else {
		userResult = `書籍数 ${userTotalItems}`
	}

	return (
		<Div>
			{ errorMessage ? <ErrorMessage /> : <Loding /> }
			{ userResult && <p>{userResult}</p> }
		</Div>
	)
}

export default UserMessage 
