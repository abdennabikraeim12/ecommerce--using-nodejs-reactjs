import http from './axiosConText'


const login = (data) => {
    return http.post('/user/login',data)
}

export default {login };