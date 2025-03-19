import http from './axiosConText'





const logout = () => {
    return http.get('/user/logout')
}

export default {logout };