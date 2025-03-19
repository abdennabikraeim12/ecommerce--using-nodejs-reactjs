import http from './AxoisContext'


const create = (data) => {
    return http.post('/subcategorie/',data)// subcategorie men server.js
}
const getAll = () => {
    return http.get('/subcategorie/all')
}
const update = (id,data) => {
    return http.put(`/subcategorie/update/${id}`,data)
}
const deleteOne = (id) => {
    return http.delete(`/subcategorie/delete/${id}`)
}
const findById = (id) => {
    return http.get(`/subcategorie/findbyid/${id}`)
}
const findByName = (id) => {
    return http.get(`/subcategorie/findbyname/${id}`)
}
export default {create,getAll,update,deleteOne,findById,findByName};