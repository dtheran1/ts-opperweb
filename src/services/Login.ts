import { UserLogin, ResponseToken } from '../model/user'
import { Axios } from './index'

export const loginUser = async (user: UserLogin): Promise<ResponseToken> => {
  const response = await Axios().post('login', user)
  return response.data
}