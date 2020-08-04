import axios from 'axios'
import { useDispatch } from 'react-redux'
import { LodingStart, LodingEnd } from '~/common/store/LodingState'

interface Query {
  [key: string]: string
}

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'

//const root = 'http://networkdesign.s1005.xrea.com/bookshelf/'

const root = 'https://bookshelf-booksearch.herokuapp.com/'

const makeFormData = (data: Query): {} => {
	const formData = new FormData()
	for(const key of Object.keys(data)) {
		formData.append(key, data[key])
	}
	return formData
}

export const get = (url: string) => {
  
	url = root + url
	const dispatch = useDispatch()
  
	const customAxiosGet = async () => {
		dispatch(LodingStart())
		const res = await axios.get(url)
		dispatch(LodingEnd())
		return res.data
	}
	return customAxiosGet
}

export const post = (url: string, data: {}) => {

	url = root + url
	const dispatch = useDispatch()

	const customAxiosPost = async () => {
		const formData = makeFormData(data)
    
		dispatch(LodingStart())
		const res = await axios.post(url, formData)
		console.log(res)
		dispatch(LodingEnd())
		return res.data
	}
	return customAxiosPost
}


 
