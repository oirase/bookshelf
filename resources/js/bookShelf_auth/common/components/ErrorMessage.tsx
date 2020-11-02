import * as React from 'react'
import { useSelector } from 'react-redux'
import { Store } from '~/main/store'
import styled from 'styled-components'
import { color } from '~/common/style'

const P = styled.p`
  color: ${color.red};
  //line-height: 1.7;
`

const ErrorMessage: React.FC = () => {

	const errorMessage = useSelector((state: Store) => state.ErrorMessage)

	return errorMessage ? <P>{errorMessage}</P> : null

}

export default ErrorMessage
