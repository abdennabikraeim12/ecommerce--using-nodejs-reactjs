import http from './AxoisContext'


const create = (data) => {
    return http.post('/categorie/',data)
}
const getAll = () => {
    return http.get('/categorie/all')
}
const update = (id,data) => {
    return http.put(`/categorie/update/${id}`,data)
}
const deleteOne = (id) => {
    return http.delete(`/categorie/delete/${id}`)
}
const findById = (id) => {
    return http.get(`/categorie/findId/${id}`)
}
const findByName = (id) => {
    return http.get(`/categorie/findbyname/${id}`)
}
export default {create,getAll,update,deleteOne,findById,findByName};