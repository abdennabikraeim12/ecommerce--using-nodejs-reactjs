import http from './axiosConText'


const register= (data) => {
    return http.post('/customer/',data)
}

export default {register};