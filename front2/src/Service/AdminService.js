import http from './AxoisContext'


const create = (data) => {
    return  http.post('/Admin/',data)
    
}

const login = (data) => {
    return http.post('/user/login',data)
}
const logout = () => {
    return http.get('/user/logout')
}

export default {login,create,logout };

