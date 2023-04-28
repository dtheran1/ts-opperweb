import { GetDataAuth, ResponseCategories, Category, UpdateCategory } from '../model/user'
import axios from 'axios'

export const getCategories = async (payload: GetDataAuth, token: string): Promise<ResponseCategories> => {
  const res = await axios.get('https://front.opperdev.com/api/v1/categoria', {
    data: payload,
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`
    },
  })
  return res.data
}

export const createCategory = async (payload: Category, token: string): Promise<Category> => {
  const res = await axios.post('https://front.opperdev.com/api/v1/categoria/create', payload, {
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`
    },
  })
  return res.data
}

export const updateCategory = async (payload: UpdateCategory, token: string): Promise<Category> => {
  const res = await axios.put('https://front.opperdev.com/api/v1/categoria/create', payload , {
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`
    },
  })
  return res.data
}
