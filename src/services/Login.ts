import { User } from '../model/user'
import { Axios } from './index'

export const loginUser = async (user: User) => {
  const response = await Axios().post('login', user)
  return response.data
}