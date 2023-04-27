import axios from 'axios'
const url = 'https://front.opperdev.com/api/register'
export const RegisterUser = (person: any) => {
  return axios.post(url, person)
}




