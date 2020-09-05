import * as React from 'react'
import Contents from '@/common/components/Contents'
import Message from '@/common/components/Message'
import { color } from '@/common/style'

const UserContents: React.FC = () => {

  const info = (
    <>
      本棚を使用するとお気に入りの書籍を登録出来ます。<br />
      本棚を利用する場合はログインまたは新規登録を行って下さい。
    </>
  )

  return (
    <Contents color={color.user}>
      <Message result={info} />
    </Contents>
  )
}

export default UserContents
