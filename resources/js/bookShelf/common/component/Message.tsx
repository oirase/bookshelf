/*
import * as React from 'react'
import { useSelector } from 'react-redux'
import { Store } from '~/main/store'
import styled from 'styled-components'
import { color } from '~/common/style'

const P = styled.p`
  height: 5rem;
  color: ${color.red}
`

const Message: React.FC = () => {

  const errorMessage = useSelector((state: Store) => state.ErrorMessage)
  const lodingState = useSelector((state: Store) => state.LodingState)
  const userTotalItems = useSelector((state: Store) => state.UserTotalItems)
  const searchBookList = useSelector((state: Store) => state.SearchBookList)
  const searchMode = useSelector((state: Store) => state.SearchMode)

  return errorMessage ? <P>{errorMessage}</P> : null

    let SearchResult

  if(lodingState || errorMessage) {
    SearchResult = null
  } else if(!userTotalItems) {
    SearchResult = <P>本棚に書籍が登録されていません。新しく書籍を追加する場合は検索結果から本棚に追加するボタンをクリックして下さい。</P>
  } else {
    SearchResult = <P>書籍数 {userTotalItems}</P>
  }

  let SearchResult
    if(lodingState || errorMessage) {
      SearchResult = null
    } else if (!searchWord) {
      SearchResult =　<P>検索語句を入力して下さい</P>
    }　else if(!searchTotalItems) {
      SearchResult = <P>書籍が見つかりませんでした</P>
    } else if (searchBookList.length === 0) {
      SearchResult = <P>このページ以降は検索結果がありません</P>
    } else {
      SearchResult = <P>検索数 {searchTotalItems}　件</P>
    }

// return lodingState ? <p>通信中</p> : null
return
}

export default ErrorMessage  
*/
