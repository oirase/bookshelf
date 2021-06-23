import * as React from 'react'
import ErrorMessage from '@/common/components/ErrorMessage'
import Loding from '@/common/components/Loding'
import styled from 'styled-components'

const Div = styled.div`
  height: 10rem;
  display: flex;
  align-items: center;
  text-align: center;
  //line-height: 2.5;
  line-height: 1.7;
  padding-top: 2rem;
`

const P = styled.p`
  //height: 5rem;
  //line-height: 1.7;
`

interface Props {
  result: string | React.ReactElement | null
  error?: string
}

const Message: React.FC<Props> = ({ result, error = '' }) => {

  return (
    <Div>
      { error ? <ErrorMessage /> : <Loding /> }
      { result && <p>{result}</p> }
    </Div>
  )
}

export default Message
