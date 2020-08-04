import { AxiosInstance } from 'axios'

interface WindowType extends Window {  
    axios: AxiosInstance
}

declare var window: WindowType

window.axios = require('axios');

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
