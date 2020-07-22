import axios from 'axios'
import { useDispatch } from 'react-redux'
import { LodingStart, LodingEnd } from '~/common/store/LodingState'

interface Query {
  [key: string]: string
}

const root = 'https://bookshelf-booksearch.herokuapp.com/'

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';



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
		return res
	}
	return customAxiosPost
}


 
