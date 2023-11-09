import axios from 'axios'
import { removeItem, getItem ,setItem  } from './localStorageManager'
const axiosClient=axios.create({
     baseURL:'http://localhost:4000',
     withCredentials:true
})

axiosClient.interceptors.request.use(
    (request)=>{
        const accessToken=getItem('accessToken')
        request.headers["Authorization"] = `Bearer ${accessToken}`;
        return request
    }
)
axiosClient.interceptors.response.use(
    async(response)=>{
         const data=response.data                
        if(data.status==='ok') return data
        const originalRequest=response.config
        const statusCode=data.statusCode
        const error=data.messege
        if(statusCode===401&&originalRequest.url==='http://localhost:4000/auth/refresh')
        {
            //refresh token expires
            removeItem('accessToken')
            window.location.replace('/login','_self');
            return Promise.reject(error)
        }
        if(statusCode===401)
        {
            console.log(originalRequest);
            const credentials=await JSON.parse(originalRequest.data)
            const response=await axios.post('http://localhost:4000/auth/refresh',credentials)
            if(response.status==='ok')
            {
                setItem('accessToken',response.messege.accessToken)
                originalRequest.headers[`Authorization`]=`Bearer ${getItem('accessToken')}`
                return axios(originalRequest)
            }
        }
        return Promise.reject(error)
    }
)
export default axiosClient