import http from './AxoisContext'


const create = (data) => {
    return http.post('/customer/',data)
}
const getAll = () => {
    return http.get('/customer/all')
}
const update = (id,data) => {
    return http.put(`/customer/update/${id}`,data)
}
const deleteOne = (id) => {
    return http.delete(`/customer/delete/${id}`)
}
const findById = (id) => {
    return http.get(`/customer/findId/${id}`)
}

export default {create,getAll,update,deleteOne,findById};