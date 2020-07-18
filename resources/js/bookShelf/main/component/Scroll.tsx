import * as React from 'react'
import styled from 'styled-components'

const Div = styled.div`
  background: #777;
  opacity: 0.4;
  width: 5rem;
  height: 5rem;
  border-radius: 2px;
  color: #FFF;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  right: 2%;
  bottom: 2%;
  font-size: 2.4rem;
  cursor: pointer;
`

const Scroll: React.FC = () => {

	const scrollUp = () => {
		window.scroll(0, 200)
	}

	return (
		<Div onClick={scrollUp}>&#9650;</Div>
	)
}

export default Scroll
