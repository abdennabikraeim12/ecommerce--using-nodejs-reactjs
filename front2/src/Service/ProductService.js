import http from './AxoisContext'


const create = (data) => {
    return http.post('/product/',data)
}
const getAll = () => {
    return http.get('/product/all')
}
const update = (id,data) => {
    return http.put(`/product/update/${id}`)
}
const deleteOne = (id) => {
    return http.delete(`/product/delete/${id}`)
}
const findById = (id) => {
    return http.get(`/product/findbyid/${id}`)
}
const findByName = (id) => {
    return http.get(`/product/findbyname/${id}`)
}
export default {create,getAll,update,deleteOne,findById,findByName};