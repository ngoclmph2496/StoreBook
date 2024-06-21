import { Ibook } from '../Types/Book_types'
import { APP_ENDPOINTS } from '../constants/endpoints'
import axiosClients from '../libray/axios/axiosClients'

export const getBook = () => {
    return axiosClients.get<Ibook[]>(APP_ENDPOINTS.BOOK)
        .then(res => {
            return res.data;
        });
}
export const getBooks = (id: string | number) => {
    return axiosClients
        .get<Ibook>(`${APP_ENDPOINTS.BOOK}/${id}`)
        .then(res => {
            return res.data;
        });
}
export const deleteBook = (id: string | number) => {
    return axiosClients
        .delete<Ibook>(`${APP_ENDPOINTS.BOOK}/${id}`)
        .then(res => {
            return res.data
        });
}
export const craeteBook = (data: Ibook) => {
    return axiosClients
        .post<Ibook>(APP_ENDPOINTS.BOOK, data)
        .then(res => {
            return res.data
        });
}
export const editBook = (data: Ibook) => {
    return axiosClients
        .put<Ibook>(`${APP_ENDPOINTS.BOOK}/${data.id}`, data)
        .then(res => {
            return res.data
        });
}

