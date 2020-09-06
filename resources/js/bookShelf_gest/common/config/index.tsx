
const debug = false

let root: string, topPageRoute: string, bookPageRoute: string

if(debug) {

  root = 'http://networkdesign.s1005.xrea.com/bookshelf/'
  topPageRoute = '/bookshelf/'
  bookPageRoute = '/bookshelf/book'

} else {

  root = 'https://bookshelf-booksearch.herokuapp.com/'
  topPageRoute = '/'
  bookPageRoute = '/book'

}

//const root = 'http://networkdesign.s1005.xrea.com/bookshelf/'

const lodingImage = `${root}image/89-32.gif`

console.log('config root', root)

export { root, topPageRoute, bookPageRoute, lodingImage }
