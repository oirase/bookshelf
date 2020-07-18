
export interface BookType {
  bookId: string
  isbn: string
  title: string
  authors: string | string[]
  publisher: string
  publishedDate: string
  description: string
  pageCount: number
  thumbnail: string
  smallThumbnail: string
}

type BookListType =  BookType[]

export default BookListType
