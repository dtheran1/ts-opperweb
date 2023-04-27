import { User } from '../model/user'
import { Api } from './index'

export const LoginUser = (user: User) => {
  return Api().post('/', user)
}