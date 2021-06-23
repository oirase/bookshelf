import * as React from 'react'
import styled from 'styled-components'
import { color } from '@/common/style'

interface Props {
  totalItems: number
  selectPage: number
  handleClick: (value: number)=> void
}

const Div = styled.div`

  @media (min-width: 768px) {
      display: flex;
  }

`

const Ul = styled.ul`
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;
`

const Li = styled.li<{ selectPage: number, innerValue : string | number }>`
  width: 3.4rem;
  height: 3.4rem;
  display: flex;
  margin-right: 1.5rem;
  justify-content: center;
  text-align: center;
  align-items: center;
  border: 1px solid #FFF;
  background: ${(props) => props.selectPage === props.innerValue ? color.red : color.yellow};
  color: #FFF;

  &:hover {
    background: ${color.orange};
  }
`

const Paginate: React.FC<Props> = React.memo(({ totalItems, selectPage, handleClick }: Props) => {

  const maxItems = 20
  if (totalItems <= maxItems) {
    return null
  }

  const totalPage = Math.ceil(totalItems / maxItems)

  let startPage

  if(selectPage < 10) {
    startPage = 1
  } else {
    startPage = Math.floor(selectPage / 10) * 10
  }

  if(startPage === totalPage) {
    startPage -= 10
  }

  let endPage = startPage + 10

  if(selectPage < 10) {
    endPage -= 1
  }

  if(endPage > totalPage) {
    endPage = totalPage
  }

  const backnumber = startPage - 10

  const PageList = []

  const makePageItem = (
    pageNumber: number,
    key: number | string | null = null,
    content: React.ReactNode = null
  ) => {
      return (
          <Li
            key={key ?? pageNumber}
            onClick={()=>{handleClick(pageNumber)}}
            innerValue={pageNumber}
            selectPage={selectPage}
            //dangerouslySetInnerHTML={{ __html: content ?? pageNumber }}
          >
          {content ? content : pageNumber }
          </Li>
      )
    }

  for( let i = startPage; i <= endPage; ++i) {
    PageList.push(makePageItem(i))
  }

  if(selectPage >= 20) {
    PageList.unshift(makePageItem(backnumber))
  }

  if(selectPage >= 10) {
    PageList.unshift(makePageItem(1))
  }

  if(endPage !== totalPage) {
    PageList.push(makePageItem(totalPage))
  }

   if (selectPage !== 1) {
    const backPage = selectPage - 1
    const backIcon = <span>&#9664;</span>
    PageList.unshift(makePageItem(backPage, '&#9664;', backIcon))
  }
  if (selectPage !== endPage) {
    const nextPage = selectPage + 1
    const nextIcon = <span>&#9654;</span>
    PageList.push(makePageItem(nextPage, '&#9654;', nextIcon))
  }

  const index = Math.ceil(PageList.length / 2)

  const PageListFirst = PageList.splice(0, index)
  //const PageListFirst = PageList.slice(0, index)
  //const PageListSecond = PageList.slice(index + 1)

  return (
    <Div>
      <Ul>
        {PageListFirst}
      </Ul>
      <Ul>
        {PageList}
      </Ul>
    </Div>
  )
})

export default Paginate
