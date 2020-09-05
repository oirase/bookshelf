import * as React from 'react'
import ErrorMessage from '@/common/components/ErrorMessage'
import Loding from '@/common/components/Loding'
import styled from 'styled-components'

const Div = styled.div`
  height: 7rem;
  display: flex;
  align-items: center;
  text-align: center;
  line-height: 2.5;
`

const P = styled.p`
  //height: 5rem;
  line-height: 1.7;
`

interface Props {
  result: string | React.ReactElement | null
  error?: string
}

const Message: React.FC<Props> = ({ result, error = '' }) => {

  return (
    <Div>
      { error ? <ErrorMessage /> : <Loding /> }
      { result && <P>{result}</P> }
    </Div>
  )
}

export default Message
