import axios from 'axios'
import { removeItem, getItem ,setItem  } from './localStorageManager'
const axiosClient=axios.create({
     baseURL:import.meta.env.VITE_SERVER_BASE_URL,
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
        if(statusCode===401&&originalRequest.url===`${import.meta.env.VITE_SERVER_BASE_URL}/auth/refresh`){
            removeItem('accessToken')
            window.location.replace('/login','_self')
            return Promise.reject(error) //returns -invalid refresh token
        }
        if(statusCode===401)
        {
            const response= await axiosClient.get('/auth/refresh')
            if(response.status==='ok')
            {
                const accessToken=response.messege.accessToken
                setItem('accessToken',accessToken)  
                originalRequest.headers[`Authorization`]=`Bearer ${accessToken}`
                return axios(originalRequest)
            }
        }
    }
)
export default axiosClient