import { GetDataAuth, ResponseGetUser } from '../model/user'
import axios from 'axios'
export const loginUser = async (payload: GetDataAuth, token: string): Promise<ResponseGetUser> => {
  const response = await axios.get('https://front.opperdev.com/api/v1/me', {
      data: payload,
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${token}`
      },
    })
  return response.data
}
