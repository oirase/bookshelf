import * as React from 'react'
import { useSelector } from 'react-redux'
import { Store } from '~/main/store'
import Message from '~/common/components/Message'

const UserMessage: React.FC = () => {

	const userTotalItems = useSelector((state: Store) => state.UserTotalItems)
	const errorMessage = useSelector((state: Store) => state.ErrorMessage)
	const lodingState = useSelector((state: Store) => state.LodingState)

	let result

	if(lodingState || errorMessage) {
		result = null
	} else if(!userTotalItems) {
		result = <>
      本棚に書籍が登録されていません。<br />
      新しく書籍を追加する場合は検索結果から本棚に追加ボタンをクリックして下さい。
		</>
	} else {
		result = `書籍数 ${userTotalItems}`
	}

  return <Message result={result} error={errorMessage} />
}

export default UserMessage
