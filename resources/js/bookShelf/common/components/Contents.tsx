import * as React from 'react'
import styled from 'styled-components'

const ContentsWrapper = styled.div`
  background: ${props => props.color};
  display: flex;
  flex-direction: column;
  align-items: center;
  //padding: 1rem 0 2rem 0;
  padding: 1rem 0 2.5rem 0;
  min-height: 80vh;
`

interface Props {
  color: string
}

const Contents: React.FC<Props> = ({ color, children }) => {

  return (
    <ContentsWrapper color={color} >
      {children}
    </ContentsWrapper>
  )
}

export default Contents
