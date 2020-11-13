import * as React from 'react'
import styled from 'styled-components'

const Select = styled.select`
  background: #FFF;
  width: 20rem;
  text-align: center;
  text-align-last: center;
  padding: 1px 0;

  @media screen and (-webkit-min-device-pixel-ratio: 0) {
    background: red;
  }
`

interface Props {
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

const OrderSelect: React.FC<Props> = ({handleChange, children}) => {

  return (
    <Select name="order" onChange={handleChange}>
      {children}
    </Select>
  )
}

export default OrderSelect
