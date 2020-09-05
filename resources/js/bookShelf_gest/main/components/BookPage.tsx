import * as React from 'react'
import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Store } from '@/main/store'
import styled from 'styled-components'
import { color } from '@/common/style'
import { BookType } from '@/common/type/BookList'

const Contents = styled.div`
  background: ${color.search};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 0 2.5rem 0;
  min-height: calc(100vh - 10rem);
`

const Book = styled.div`
  padding: 0 5%;
  //margin-bottom: 0.9rem;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`

const Data = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  max-width: 100%;
  margin-bottom: 1rem;
`

const ImgWrapper = styled.div`
  margin: 0 3.5rem 1.3rem 3.5rem;
  background: #FFF;
  padding: 3.5rem 0;
  //border: 1px solid #FFC49B;
  width: 210px;
  min-height: 20rem;
`

const Ul = styled.ul`
  width: 28rem;
  //padding: 0 3rem;
`

const Li = styled.li`
  margin-bottom: 0.8rem;
  line-height: 1.9;
  color: rgba(0, 0, 0, 0.9);
`

const Description = styled.div`
  margin-bottom: 0.8rem;
  line-height: 1.9;
  color: rgba(0, 0, 0, 0.9);
  letter-spacing: 0.2rem;
`

const A = styled.a`
  margin: 2.8rem 0 3rem 0;
`

const BookPage: React.FC = () => {

	const location = useLocation()
	const book = location.state as BookType

	const searchMode = useSelector((state: Store) => state.SearchMode)

	let authors
	if (book.authors) {
		authors = book.authors
		if (Array.isArray(authors)) {
			authors = authors.join(', ')
		}
	}

  document.title = `${book.title} |　書籍情報 | Bookshelf`
  window.scrollTo(0, 0);

	return (
		<Contents>
			<Book>
				<Data>
					<ImgWrapper>
						{ book.thumbnail && <img src={book.thumbnail} /> }
					</ImgWrapper>
					<Ul>
						{ book.title && <Li>{book.title}</Li> }
						{ authors && <Li>{authors}</Li> }
						{ book.publisher && <Li>{book.publisher}</Li> }
						{ book.publishedDate && <Li>{book.publishedDate}</Li> }
						{ book.isbn && <Li>{book.isbn}</Li> }
					</Ul>
				</Data>
				{
					book.description &&
          <Description>
            {book.description}
          </Description>
				}
			</Book>
			<A onClick={()=>{history.back()}}>検索ページへ戻る</A>
		</Contents>
	)
}

export default BookPage
